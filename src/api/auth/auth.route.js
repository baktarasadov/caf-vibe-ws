import { container } from "@/core/di/di-container";
import express from "express";

import { authDIKeys } from "./auth.di";

const authRouter = express.Router();

const prefix = "/auth";

const authController = container.get(authDIKeys.controller);

authRouter.post(`${prefix}/login`, (req, res) =>
  authController.login(req, res),
);

authRouter.post(`${prefix}/verify-email`, (req, res) =>
  authController.verifyEmail(req, res),
);

authRouter.post(`${prefix}/register`, (req, res) =>
  authController.register(req, res),
);

authRouter.post(`${prefix}/forgot-password`, authController.forgotPassword);

// authRouter.post(`${prefix}/reset-code-check`, authController.resetCodeCheck);

export default authRouter;
