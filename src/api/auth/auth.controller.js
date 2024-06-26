import { StatusCodes } from "http-status-codes";

import { AuthDto } from "./dto/auth.dto";

export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async register(request, response) {
    const user = await this.authService.register(request.body);

    const accessToken = "";
    // generateToken(
    //   {
    //     id: user.id,
    //     login: user.login,
    //     role: user.role,
    //     entity: "User",
    //   },
    //   "2h",
    // );

    response.success({
      message: "User register success",
      status: StatusCodes.CREATED,
      data: new AuthDto(user, accessToken),
    });
  }

  async login(request, response) {
    const user = await this.authService.login(request.body);

    const accessToken = "";
    // generateToken(
    //   {
    //     id: user.id,
    //     login: user.login,
    //     role: user.role,
    //     entity: "User",
    //   },
    //   "2h",
    // );

    response.success({
      message: "User Login  success",
      status: StatusCodes.OK,
      data: new AuthDto(user, accessToken),
    });
  }
}