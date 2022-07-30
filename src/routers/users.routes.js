import { Router } from "express";

import {
  listUsersController,
  createUserController,
  updateUserController,
  deleteUserController,
  retrieveUserController,
} from "../controllers/user.controllers";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import userSchema from "../database/schemas/user.schema";
import schemaValidationMiddleware from "../middlewares/schemaValidation.middleware";
import verifyAuthTokenMiddleware from "../middlewares/authentication.middleware";
import verifyAdminStatusMiddleware from "../middlewares/verifyAdminStatus.middleware";

const router = Router();

router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyAdminStatusMiddleware,
  listUsersController
);
router.post(
  "",
  verifyEmailAvailabilityMiddleware,
  schemaValidationMiddleware(userSchema),
  createUserController
);
router.get("/profile", verifyAuthTokenMiddleware, retrieveUserController);
router.patch("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

export default router;
