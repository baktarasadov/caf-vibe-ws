import { generateToken } from "@/common/helpers/generate-token";
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
