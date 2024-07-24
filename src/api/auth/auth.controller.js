import { StatusCodes } from "http-status-codes";

import { AuthDto } from "./dto/auth.dto";

export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async register(request, response) {
    await this.authService.register(request.body);

    response.success({
      message: "Registration successful. Please verify your email.",
      status: StatusCodes.CREATED,
    });
  }

  async verifyEmail(request, response) {
    const data = await this.authService.verifyEmail(request.body);

    response.success({
      message: "Email verified successfully.",
      status: StatusCodes.CREATED,
      data: new AuthDto(data),
    });
  }

  async login(request, response) {
    const user = await this.authService.login(request.body);

    response.success({
      message: "User Login successful",
      status: StatusCodes.OK,
      data: new AuthDto(user),
    });
  }

  async forgotPassword(request, response) {
    await this.authService.forgotPassword(request.body);

    response.success({
      message: "Password reset email sent. Please check your inbox.",
      status: StatusCodes.OK,
    });
  }

  async resetCodeCheck(request, response) {
    const data = await this.authService.resetCodeCheck(request.body);

    response.success({
      message: "Reset code verified  successfully.",
      status: StatusCodes.OK,
      data: new AuthDto(data),
    });
  }
}
