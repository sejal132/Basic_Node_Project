const express = require("express");
const bodyParser = require("body-parser");
const loginController=require('./controllers/loginController');
const formController = require("./controllers/formController");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req, res) => {
  res.render("login");
});

app.post("/",formController.formController);
app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
