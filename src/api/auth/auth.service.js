import { generateToken } from "@/common/helpers/generate-token";
import { config } from "@/core/config/jwt.config";

export class AuthService {
  constructor(userService) {
    this.userService = userService;
  }

  async register(authRegisterDto) {
    authRegisterDto.role = 2;
    const data = await this.userService.create(authRegisterDto);

    const payload = {
      sub: data._id,
      email: data.contact.email,
    };

    const token = await this.createToken(payload);

    return { user: data, token };
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
