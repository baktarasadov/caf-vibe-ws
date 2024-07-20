import { generateToken } from "@/common/helpers/generate-token";
import { config } from "@/core/config/jwt.config";
import { BaseResponse } from "@/core/response/base-response";
import { StatusCodes } from "http-status-codes";

export class AuthService {
  constructor(userService) {
    this.userService = userService;
  }

  async register(authRegisterDto) {
    const existingUser = await this.findByEmail(authRegisterDto.contact.email);

    if (existingUser && existingUser.isEmailVerified) {
      throw new BaseResponse.error({
        message: "Email is already in use",
        status: StatusCodes.CONFLICT,
      });
    }

    if (existingUser && !existingUser.isEmailVerified) {
      await this.userService.delete(existingUser._id);
    }

    authRegisterDto.role = 2;
    const saveData = await this.userService.create(authRegisterDto);

    const payload = {
      sub: saveData._id,
      email: saveData.contact.email,
    };

    const token = await this.createToken(payload);

    return { user: saveData, token };
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
}
