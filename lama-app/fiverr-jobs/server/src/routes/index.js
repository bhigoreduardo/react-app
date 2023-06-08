import express from "express";

import authRoutes from "./auth.route.js";
import gigRoutes from "./gig.route.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/gigs", gigRoutes);

export default router;
