import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import errorHandler from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user/user.routes.js";
import propertyRoutes from "./routes/property/property.routes.js";

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

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

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/property", propertyRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
