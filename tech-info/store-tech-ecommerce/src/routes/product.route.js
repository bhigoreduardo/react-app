import express from "express";
import { validate } from "express-validation";
import formidable from "express-formidable";

import * as authValidation from "../middlewares/auth.validation.js";
import * as productValidation from "../middlewares/product.validation.js";
import * as productController from "../controllers/product.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post(
  "/register",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  // validate(productValidation.registerValidation),
  formidable(),
  use(productController.register)
);
router.put(
  "/:id",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  // validate(productValidation.updatedValidation),
  formidable(),
  use(productController.update)
);
router.get("/", use(productController.getAll));
router.post(
  "/filter",
  validate(productValidation.filterProductsValidation),
  use(productController.filterProducts)
);
router.get("/count", use(productController.countProducts));
router.get(
  "/paginate/:page",
  validate(productValidation.listPerPageValidation),
  use(productController.listPerPage)
);
router.get(
  "/search/:search",
  validate(productValidation.searchValidation),
  use(productController.search)
);
router.get(
  "/:id/related/:category",
  validate(productValidation.relatedValidation),
  use(productController.related)
);
router.get(
  "/:id",
  validate(productValidation.getByIdValidation),
  use(productController.getById)
);
router.get(
  "/:id/photo",
  validate(productValidation.getPhotoByIdValidation),
  use(productController.getPhotoById)
);
router.delete(
  "/:id",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  validate(productValidation.removeValidation),
  use(productController.remove)
);

export default router;
