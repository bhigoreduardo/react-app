import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../middlewares/auth.validation.js";
import * as orderValidation from "../middlewares/order.validation.js";
import * as orderController from "../controllers/order.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.get(
  "/generate-payment-token",
  use(authValidation.requireSignIn),
  use(orderController.generatePaymentToken)
);
router.post(
  "/payment-checkout",
  use(authValidation.requireSignIn),
  use(orderController.paymentCheckout)
);
router.get(
  "/administrator",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  use(orderController.getAllByAdministrator)
);
router.get(
  "/customer",
  use(authValidation.requireSignIn),
  use(orderController.getAllByCustomer)
);
router.get(
  "/administrator/:id",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  validate(orderValidation.getByAdministratorValidation),
  use(orderController.getByAdministrator)
);
router.get(
  "/customer/:id",
  use(authValidation.requireSignIn),
  validate(orderValidation.getByCustomerValidation),
  use(orderController.getByCustomer)
);
router.put(
  "/:id",
  use(authValidation.requireSignIn),
  use(authValidation.requireAdministrator),
  validate(orderValidation.updateStatusValidation),
  use(orderController.updateStatus)
);

export default router;
