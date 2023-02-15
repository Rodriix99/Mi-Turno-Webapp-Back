import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./config/db";
import routes from "./routes/index";

const port = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo bien");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log("Listening on port 3001");
});
