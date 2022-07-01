import express from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getProduct,
} from "../controller/productController.js";
import { verifyTokenAndAdmin } from "./verifyToken.js";

const router = express.Router();

//Create new Product
//POST /api/products/
//@Access PRIVATE
router.post("/", verifyTokenAndAdmin, createProduct);

//Update Product
//PUT /api/products/:id
//@Access PRIVATE
router.post("/:id", verifyTokenAndAdmin, editProduct);

//Delete Product
//DELETE /api/products/:id
//@Access PRIVATE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//GET Single Product
//GET /api/products/find/:id
//@Access PRIVATE
router.get("/find/:id", getProduct);

//GET ALL Product
//GET /api/products/
router.get("/", getAllProducts);

export default router;
