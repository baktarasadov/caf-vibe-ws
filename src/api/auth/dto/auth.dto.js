import { UserDto } from "@/api/user/dto/user.dto";

import { TokenDto } from "./token.dto";

export class AuthDto {
  constructor(data) {
    this.token = new TokenDto(data.token);
    this.user = new UserDto(data.user);
  }
}
