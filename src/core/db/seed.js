import { roleDIKeys } from "@/api/role/role.di";
import { userDIKeys } from "@/api/user/user.di";
import { UserSeeder } from "@/api/user/user.seeder";

import { container } from "../di/di-container";

export const seed = async () => {
  const userSeeder = new UserSeeder(
    container.get(userDIKeys.repository),
    container.get(roleDIKeys.repository),
  );

  await Promise.all([userSeeder.createAdmin()]);
};
