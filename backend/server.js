

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000, () => console.log("Server running on port 5000"));
