const express = require("express");
const mongoose = require("mongoose");
const loginController = require("./controllers/loginController");
const registerController = require("./controllers/registerController");
const dashboardController = require("./controllers/dashboardController");

// Connect to database
mongoose.connect("mongodb://localhost:27017/loginAppDB", {
  useNewUrlParser: true,
});

// Initiate server
const app = express();

// Middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

// Default
app.get("/", (req, res) => res.redirect("/login"));

// Login controllers
app.get("/login", loginController.loginController);
app.post("/login", loginController.loginFormController);

// Dashboard controller
app.get("/dashboard", dashboardController.dashboardController);

// Register controllers
app.get("/register", registerController.registerController);
app.post("/register", registerController.registerFormController);

// Start server on localhost
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
