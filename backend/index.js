import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

connectDB();

dotenv.config({path: "../.env"});
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send("<h1>Welcome to Product Management App</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});