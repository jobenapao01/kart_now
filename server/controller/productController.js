import Product from "../models/Product.js";
import mongoose from "mongoose";

//Create new Product
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Edit Product
export const editProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete Product
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET single Product
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET ALL Product
export const getAllProducts = async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  try {
    let products;

    products = await Product.find();

    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    }

    if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
