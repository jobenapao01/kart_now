import express from "express";
import {
  createOrder,
  deleteOrder,
  editOrder,
  getAllOrders,
  getMonthlyIncome,
  getUserOrders,
} from "../controller/orderController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "./verifyToken.js";

const router = express.Router();

//Create new Order
//POST /api/order/
//@Access PRIVATE
router.post("/", verifyToken, createOrder);

//EDIT Order
//PUT /api/order/:id
//@Access PRIVATE
router.put("/:id", verifyTokenAndAdmin, editOrder);

//Delete Order
//PUT /api/order/:id
//@Access PRIVATE
router.delete("/:id", verifyTokenAndAuthorization, deleteOrder);

//GET USER Order
//PUT /api/order/find/:userId
//@Access PRIVATE
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrders);

//GET All Order
//PUT /api/order/
//@Access PRIVATE
router.get("/", verifyTokenAndAdmin, getAllOrders);

//GET Monthly Income
//PUT /api/order/income
//@Access PRIVATE
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;
