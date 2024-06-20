import { container } from "@/core/di/di-container";

import { RoleRepository } from "./role.repository";

export const roleDIKeys = {
  repository: "role-repository",
};

container.register(roleDIKeys.repository, [], () => new RoleRepository());
