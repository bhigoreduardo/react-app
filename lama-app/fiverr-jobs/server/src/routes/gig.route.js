import express from "express";

import { verifyToken } from "../middlewares/jwt.js";
import {
  create,
  createReview,
  findAll,
  findAllReviewsById,
  findById,
  remove,
  removeReview,
} from "../controllers/gig.controller.js";

const router = express.Router();

router.post("/", verifyToken, create);
router.delete("/:id", verifyToken, remove);
router.get("/:id", findById);
router.get("/", findAll);
router.post("/:id/reviews", verifyToken, createReview);
router.get("/:id/reviews", findAllReviewsById);
router.delete("/:id/reviews", verifyToken, removeReview);

export default router;
