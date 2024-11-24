import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Product from "./models/taskmodel.ts"; 
import productRoute from "./routes/todoroute.ts";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test route
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello from Node API hello");
});

// Routes
app.use("/api/todos", productRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error: Error) => {
    console.log("Connection Failed!", error);
  });
