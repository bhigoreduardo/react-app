import express from "express";

import { verifyToken } from "../middlewares/jwt.js";
import {
  create,
  findAll,
  findById,
  remove,
} from "../controllers/gig.controller.js";

const router = express.Router();

router.post("/", verifyToken, create);
router.delete("/:id", verifyToken, remove);
router.get("/:id", findById);
router.get("/", findAll);

export default router;
