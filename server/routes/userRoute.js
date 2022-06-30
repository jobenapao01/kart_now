import express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "./verifyToken.js";
import {
  deleteUser,
  editUser,
  getUser,
  getAllUsers,
  getUserStats,
} from "../controller/userController.js";

const router = express.Router();

//Edit User
//PUT /users/edit/:id
//@Access PRIVATE
router.put("/:id", verifyTokenAndAuthorization, editUser);

//Delete User
//DELETE /users/:id
//@Access PRIVATE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//Get User
//GET /users/:id
//@Access PRIVATE
router.get("/find/:id", verifyTokenAndAdmin, getUser);

//Get All Users
//GET /users/
//@Access PRIVATE
router.get("/", verifyTokenAndAdmin, getAllUsers);

//Get User Stat
//GET /users/stats/
//@Access PRIVATE
router.get("/stats", verifyTokenAndAdmin, getUserStats);

export default router;
