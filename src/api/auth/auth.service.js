import { comparePassword } from "@/common/helpers/hash-password";
import { generateToken } from "@/common/helpers/jwt-token";
import {
  generateVerificationCode,
  getVerificationCodeExpiry,
} from "@/common/helpers/verification";
import { config } from "@/core/config/jwt.config";
import { BaseResponse } from "@/core/response/base-response";
import { StatusCodes } from "http-status-codes";

export class AuthService {
  constructor(userService, emailService) {
    this.userService = userService;
    this.emailService = emailService;
  }

  async register(authRegisterDto) {
    const existingUser = await this.userService.findByEmail(
      authRegisterDto.contact.email,
    );

    if (existingUser && existingUser.emailVerification?.verified) {
      throw new BaseResponse.error({
        message: "Email is already in use",
        status: StatusCodes.CONFLICT,
      });
    }

    if (existingUser && !existingUser.emailVerification?.verified) {
      await this.userService.delete(existingUser._id);
    }

    const verificationCode = generateVerificationCode();
    const verificationTime = getVerificationCodeExpiry(3);

    authRegisterDto.role = 2;

    authRegisterDto.emailVerification = {
      code: verificationCode,
      expiresAt: verificationTime,
      verified: false,
    };

    const savedUser = await this.userService.create(authRegisterDto);

    await this.emailService.sendVerificationEmail(
      savedUser.contact.email,
      savedUser.emailVerification.code,
      "Hi, This Email Verification Code",
    );
  }

  async login(authloginDto) {
    const { email, password } = authloginDto;

    const existingUser = await this.userService.findByEmail(email);

    if (
      !existingUser ||
      !(await comparePassword(password, existingUser.password))
    ) {
      throw new BaseResponse.error({
        message: "Email or Password is incorrect.",
        status: StatusCodes.UNAUTHORIZED,
      });
    }

    const payload = {
      sub: existingUser._id,
      email,
    };

    const token = await this.createToken(payload);

    return { user: existingUser, token };
  }

  async forgotPassword(email) {
    const existingUser = await this.userService.findByEmail(email);

    if (
      !existingUser ||
      !existingUser.existingUser.emailVerification?.verified
    ) {
      throw new BaseResponse.error({
        message: "User with this email does not exist.",
        status: StatusCodes.NOT_FOUND,
      });
    }

    existingUser.passwordReset = {
      code: this.generateVerificationCode(),
      expiresAt: this.getVerificationCodeExpiry(5),
    };

    await existingUser.save();

    await this.emailService.sendVerificationEmail(
      existingUser.contact.email,
      existingUser.passwordReset.code,
      "Hi, This Reset Code",
    );
  }

  async verifyEmail(verificationDto) {
    const { code, email } = verificationDto;

    const existingUser = await this.userService.findByEmail(email);

    if (!existingUser) {
      throw new BaseResponse.error({
        message: "User with this email does not exist.",
        status: StatusCodes.CONFLICT,
      });
    }

    if (existingUser.emailVerification?.verified) {
      throw new BaseResponse.error({
        message: "Your email is already verified. Please login to continue.",
        status: StatusCodes.BAD_REQUEST,
      });
    }

    if (existingUser.emailVerification.code !== code) {
      throw new BaseResponse.error({
        message: "Invalid verification code.",
        status: StatusCodes.BAD_REQUEST,
      });
    }

    const now = Date.now();

    if (existingUser.emailVerification.expiresAt < now) {
      existingUser.emailVerification.code = generateVerificationCode();
      existingUser.emailVerification.expiresAt = getVerificationCodeExpiry(3);

      await existingUser.save();

      await this.emailService.sendVerificationEmail(
        existingUser.contact.email,
        existingUser.emailVerification.code,
        "Hi, This Email Verification Code",
      );

      throw new BaseResponse.error({
        message:
          "Verification code has expired. A new code has been sent to your email.",
        status: StatusCodes.BAD_REQUEST,
      });
    }

    existingUser.emailVerification.verified = true;
    existingUser.emailVerification.code = undefined;
    existingUser.emailVerification.expiresAt = undefined;

    await existingUser.save();

    const payload = {
      sub: existingUser._id,
      email,
    };

    const token = await this.createToken(payload);

    return {
      token,
      user: existingUser,
    };
  }

  async resetCodeCheck(resetCodeCheckDto) {
    const { email, code } = resetCodeCheckDto;

    const existingUser = await this.userService.findByEmail(email);

    if (!existingUser || !existingUser.emailVerification?.verified) {
      throw new Error(
        "User with this email does not exist or is not verified.",
      );
    }

    if (existingUser.emailVerification.code !== code) {
      throw new BaseResponse.error({
        message: "Invalid reset code.",
        status: StatusCodes.BAD_REQUEST,
      });
    }

    const now = Date.now();

    if (existingUser.emailVerification.expiresAt < now) {
      existingUser.emailVerification.code = generateVerificationCode();
      existingUser.emailVerification.expiresAt = getVerificationCodeExpiry(5);

      await existingUser.save();

      await this.emailService.sendVerificationEmail(
        existingUser.contact.email,
        existingUser.emailVerification.code,
        "Hi, This Reset Code",
      );

      throw new BaseResponse.error({
        message:
          "Reset code has expired. A new code has been sent to your email.",
        status: StatusCodes.BAD_REQUEST,
      });
    }

    existingUser.emailVerification.code = undefined;
    existingUser.emailVerification.expiresAt = undefined;

    await existingUser.save();

    const payload = {
      sub: existingUser._id,
      email,
    };

    const token = await this.verificationToken(payload);

    return { user: existingUser, token };
  }

  async createToken(payload) {
    const { accessSecret, accessExpiresIn, refreshSecret, refreshExpiresIn } =
      config.jwt;

    const accessToken = await generateToken(
      payload,
      accessSecret,
      accessExpiresIn,
    );

    const refreshToken = await generateToken(
      payload,
      refreshSecret,
      refreshExpiresIn,
    );

    await this.userService.update(payload.sub, {
      token: { refresh: refreshToken },
    });

    return { accessToken, refreshToken };
  }

  async verificationToken(payload) {
    const { verificationExpiresIn, verificationSecret } = config.jwt;

    return generateToken(payload, verificationSecret, verificationExpiresIn);
  }
}
