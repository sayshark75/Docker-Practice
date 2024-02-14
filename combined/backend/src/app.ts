import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/connectDB";

const app = express();
dotenv.config();

app.use(express.static("public"));
app.use(cors());

const port = process.env.PORT || 8080;

app.get("/test", (req, res) => {
  res.status(200).send({ message: "Get Request Success", status: true });
});

app.listen(port, async () => {
  try {
    await connectDB;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Unable to connect to DB", error);
    console.log(process.env.MONGO_URL);
  }
  console.log(`Server running on port ${port}`);
});
