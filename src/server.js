import "@/core/config/env.config";
import { createServer } from "http";

import app from "./app";
import { createDbConnection } from "./core/config/db.config";
import { seed } from "./core/db/seed";

const server = createServer(app);
const { PORT } = process.env;

(async () => {
  await createDbConnection();
  await seed();
  server.listen(PORT, async () => {
    console.log(`Server is running: http://localhost:${PORT}`);
  });
})();
