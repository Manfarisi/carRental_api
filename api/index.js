import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "../configs/db.js";
import userRouter from "../routes/userRoutes.js";
import ownerRouter from "../routes/ownerRoutes.js";
import bookingRouter from "../routes/bookingRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
await connectDb();

// routes
app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

// ⚠️ uploads di vercel sebenernya ga persistent, tapi aman dulu
app.use("/uploads", express.static("uploads"));

// ⛔ JANGAN ADA app.listen
export default app;
