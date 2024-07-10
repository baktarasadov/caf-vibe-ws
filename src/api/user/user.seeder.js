import hashPassword from "@/common/helpers/hash-password";

export class UserSeeder {
  constructor(userRepository, roleRepository) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
  }

  async createAdmin() {
    await this.createRole();
    const data = await this.userRepository.findOne({ role: 1 });

    if (!data) {
      const password = await hashPassword("baktaradmin");

      return this.userRepository.create({
        email: "baktaradmin@gmail.com",
        fullName: "baktar admin",
        password,
        role: 1,
      });
    }

    return null;
  }
}
