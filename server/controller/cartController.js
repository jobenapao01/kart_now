import Cart from "../models/Cart.js";

export const createCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editCart = async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updateCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const deleteCart = await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
