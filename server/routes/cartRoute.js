import express from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "./verifyToken.js";
import {
  createCart,
  deleteCart,
  editCart,
  getAllCarts,
  getUserCart,
} from "../controller/cartController.js";

const router = express.Router();

//Create new Cart
//POST /api/cart/
//@Access PRIVATE
router.post("/", verifyToken, createCart);

//EDIT Cart
//PUT /api/cart/:id
//@Access PRIVATE
router.put("/:id", verifyTokenAndAuthorization, editCart);

//Delete Cart
//PUT /api/cart/:id
//@Access PRIVATE
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

//GET USER Cart
//PUT /api/cart/find/:userId
//@Access PRIVATE
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);

//GET All Cart
//PUT /api/cart/
//@Access PRIVATE
router.get("/", verifyTokenAndAdmin, getAllCarts);

export default router;
