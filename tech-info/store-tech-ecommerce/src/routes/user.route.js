import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../middlewares/auth.validation.js";
import * as userValidation from "../middlewares/user.validation.js";
import * as userController from "../controllers/user.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.get(
  "/",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  use(userController.getAll)
);
router.post(
  "/register",
  validate(userValidation.registerValidation),
  use(userController.register)
);
router.post(
  "/login",
  validate(userValidation.loginValidation),
  use(userController.login)
);
router.put(
  "/",
  use(authValidation.requireSignIn),
  validate(userValidation.updateValidation),
  userController.update
);
router.put(
  "/reset-password",
  validate(userValidation.resetPasswordValidation),
  use(userController.resetPassowrd)
);
router.put(
  "/change-password",
  use(authValidation.requireSignIn),
  validate(userValidation.changePasswordValidation),
  use(userController.changePassword)
);
router.delete(
  "/:id",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  validate(userValidation.removeValidation),
  use(userController.remove)
);
router.get(
  "/admin-validate",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  (req, res) => {
    return res.status(200).json(true);
  }
);
router.get("/user-validate", use(authValidation.requireSignIn), (req, res) => {
  return res.status(200).json(true);
});

export default router;
