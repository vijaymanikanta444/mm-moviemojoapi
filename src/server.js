import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import cors from "cors";

import MovieRoutes from "./routes/MovieRoutes";
// import CastRoutes from "./routes/CastRoutes";

dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => res.json({ name: "parmesh" }));

app.use(express.json());
app.use(cors());

app.use(express.Router());

app.use("/api/movies", MovieRoutes);
// app.use("/api/movies/cast", CastRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Movie Server Started On Port ${PORT}`));
