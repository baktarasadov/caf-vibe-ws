import { swaggerSpec, swaggerUi } from "@/core/config/swagger.config";
import "@/core/di/di-globals";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";

import footerRouter from "./api/footer/footer.route";
import { apiPrefix } from "./common/constants/api";
import baseResponseMiddleware from "./core/middleware/base-response.middleware";
import errorHandlerMiddleware from "./core/middleware/error-handler-middleware";

const app = express();

app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-6",
    legacyHeaders: false,
    message: "Too many requests",
  }),
);
app.set("trust proxy", 1);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.disable("x-powered-by");
app.use(baseResponseMiddleware);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(apiPrefix, footerRouter);
app.use(errorHandlerMiddleware);
export default app;
