import { roleDIKeys } from "@/api/role/role.di";
import { RoleSeeder } from "@/api/role/role.seeder";
import { userDIKeys } from "@/api/user/user.di";
import { UserSeeder } from "@/api/user/user.seeder";

import { container } from "../di/di-container";

export const seed = async () => {
  const userSeeder = new UserSeeder(container.get(userDIKeys.repository));
  const roleSeeder = new RoleSeeder(container.get(roleDIKeys.repository));

  await roleSeeder.createRoles();
  await Promise.all([userSeeder.createAdmin()]);
};
