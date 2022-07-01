import express from "express";
import { stripePayment } from "../controller/stripeController.js";
import { verifyTokenAndAuthorization } from "./verifyToken.js";

const router = express.Router();

router.post("/payment", verifyTokenAndAuthorization, stripePayment);

export default router;
