import { container } from "@/core/di/di-container";

import { UserRepository } from "./user.repository";
import { UserSeeder } from "./user.seeder";
import { UserService } from "./user.service";

export const userDIKeys = {
  service: "user-service",
  repository: "user-repository",
  seeder: "user-seeder",
};

container.register(userDIKeys.repository, [], () => new UserRepository());

container.register(
  userDIKeys.seeder,
  [userDIKeys.repository],
  (userRepository) => new UserSeeder(userRepository),
);

container.register(
  userDIKeys.service,
  [userDIKeys.repository],
  (userRepository) => new UserService(userRepository),
);
