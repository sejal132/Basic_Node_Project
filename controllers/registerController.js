const User = require("../models/user");

// render the registration page
const registerController = (req, res) => {
  res.render("register");
};

const registerFormController = (req, res) => {
  /**
   * req.body contains the fields of the registration form
   * firstname: String
   * lastname: String
   * email: String
   * password:String
   */
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;

  /**
   * Created a new user object using the form fields
   */
  const user = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  });

  /**
   * Insert the new user into the database
   * Check for errors if any, if not redirect to login page
   */
  User.create(user, (err, doc) => {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      console.log("Successfully saved new user!");
      res.redirect("/login");
    }
  });
};

module.exports = { registerController, registerFormController };
