import express from "express";
import cors from "cors";
import { postRoutes } from "./routes/posts.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

app.listen(3000, () => console.log("Express server started"));
