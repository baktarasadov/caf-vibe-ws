import hashPassword from "@/common/helpers/hash-password";
import { BaseResponse } from "@/core/response/base-response";
import { StatusCodes } from "http-status-codes";

export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(userDto) {
    userDto.password = await hashPassword(userDto.password);

    return this.userRepository.create(userDto);
  }

  async findByEmail(email) {
    return this.userRepository.findOne({ "contact.email": email });
  }

  async findById(id) {
    const data = await this.userRepository.findById(id);

    if (!data) {
      throw BaseResponse.error({
        status: StatusCodes.NOT_FOUND,
        message: "User not found!",
      });
    }

    return data;
  }

  async update(id, userDto) {
    await this.findById(id);

    return this.userRepository.update(id, userDto);
  }

  async delete(id) {
    await this.findById(id);

    return this.userRepository.delete(id);
  }
}
