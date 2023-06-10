import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../middlewares/auth.validation.js";
import * as categoryValidation from "../middlewares/category.validation.js";
import * as categoryController from "../controllers/category.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post(
  "/register",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  validate(categoryValidation.registerValidation),
  use(categoryController.register)
);
router.put(
  "/:id",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  validate(categoryValidation.updateValidation),
  use(categoryController.update)
);
router.get("/", use(categoryController.getAll));
router.get(
  "/:slug/products",
  validate(categoryValidation.getProductsValidation),
  use(categoryController.getProducts)
);
router.get(
  "/:slug",
  validate(categoryValidation.getBySlugValidation),
  use(categoryController.getBySlug)
);
router.delete(
  "/:id",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  validate(categoryValidation.removeValidation),
  use(categoryController.remove)
);

export default router;
