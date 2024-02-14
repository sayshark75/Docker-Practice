import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.static("public"));
app.use(cors());

const port = process.env.PORT || 8080;

app.get("/test", (req, res) => {
  res.status(200).send({ message: "Get Request Success", status: true });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
