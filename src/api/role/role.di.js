import { container } from "@/core/di/di-container";

import { RoleRepository } from "./role.repository";

export const roleDIKeys = {
  repository: "role-repository",
};

container.register(roleDIKeys.repository, [], () => new RoleRepository());

container.register(
  roleDIKeys.seeder,
  [roleDIKeys.repository],
  (roleRepository) => new roleDIKeys(roleRepository),
);
