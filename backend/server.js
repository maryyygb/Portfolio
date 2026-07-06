import express from "express";
import projectsRoutes from "./routes/projectsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/projects", projectsRoutes);

app.listen(PORT, () => {
    console.log("------------------------------");
    console.log("Server's PORT: ", PORT);
})