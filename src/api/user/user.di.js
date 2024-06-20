import { container } from "@/core/di/di-container";

import { roleDIKeys } from "../role/role.di";
import { UserRepository } from "./user.repository";
import { UserSeeder } from "./user.seeder";

export const userDIKeys = {
  service: "user-service",
  repository: "user-repository",
  seeder: "user-seeder",
};

container.register(userDIKeys.repository, [], () => new UserRepository());

container.register(
  userDIKeys.seeder,
  [userDIKeys.repository, roleDIKeys.repository],
  (userRepository, roleRepository) =>
    new UserSeeder(userRepository, roleRepository),
);
