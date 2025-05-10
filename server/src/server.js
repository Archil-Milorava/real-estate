import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import errorHandler from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user/user.routes.js";
import propertyRoutes from "./routes/property/property.routes.js";
import { BAD_REQUEST } from "./constants/http.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my backend" });
});
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/property", propertyRoutes)
app.use("*", (req, res) =>
  res.status(BAD_REQUEST).json({ message: "Route not found" })
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
