const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const routers = require("./routers");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routers.forEach((router) => {
  app.use(router.path, router.router);
});

app.use((err, req, res, next) => {
  console.log(err);
  return res.send(400);
});

app.listen(80, () => {
  console.log("Microservice up on port 80");
});
