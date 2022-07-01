import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoute.js";
import cartRoutes from "./routes/cartRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import stripeRoutes from "./routes/stripeRoute.js";

dotenv.config();

//connect to DB
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

//Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripeRoutes);

app.listen(PORT, () => console.log(`Server running @ port ${PORT}`));
