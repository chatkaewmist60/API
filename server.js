import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user_routes.js";
import tripRoutes from "./routes/trip_routes.js";
import likeRoutes from "./routes/like_routes.js";
import commentRoutes from "./routes/comment_routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
// app.use("/trips", tripRoutes);
// app.use("/likes", likeRoutes);
// app.use("/comments", commentRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
