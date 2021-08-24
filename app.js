const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const loginController = require("./controllers/loginController");
const formController = require("./controllers/formController");
const registerController = require("./controllers/registerController");

mongoose.connect("mongodb://localhost:27017/loginAppDB", {
  useNewUrlParser: true,
});

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", loginController.loginController);
app.post("/register", registerController.registerController);

app.get("/dashboard", (req, res) => {
  console.log(req.query, req.query.lastname);
  const obj=req.query;
  res.render("dashboard",{obj:obj});
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/", formController.formController);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
