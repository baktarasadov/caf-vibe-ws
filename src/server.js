import { config } from "dotenv";
import { createServer } from "http";
import app from "./app";
const server = createServer(app);
config();
const { PORT } = process.env;
console.log(PORT);

server.listen(PORT, async () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
