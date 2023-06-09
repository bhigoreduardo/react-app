import express from "express";

import { findById } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id", findById);

export default router;
