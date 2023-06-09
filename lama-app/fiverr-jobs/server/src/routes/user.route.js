import express from "express";

import { verifyToken } from "../middlewares/jwt.js";
import { findById, remove } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id", findById);
router.delete("/:id", verifyToken, remove);

export default router;
