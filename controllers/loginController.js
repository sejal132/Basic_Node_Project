const User = require("../models/user");
const url = require("url");

// render the login page
const loginController = (req, res) => {
  res.render("login");
}

const loginFormController = (req, res) => {
  /**
   * req.body contains the fields in the login form
   * email: String
   * password: String
   */
  let email = req.body.email;
  let password = req.body.password;

  /**
   * Find the user with the email entered into the login form
   * Check for any errors if any, log the errors and redirect to login page
   * If user does not exist then redirect to registration page
   * If the user exists check if the entered password matches with the password of the user
   * If no redirect to login
   * If yes redirect to the custom dashboard of the user
   */
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
      res.redirect("/login");
    } else if (!user) {
      res.redirect("/register");
    } else {
      if (password != user.password) {
        res.redirect("/login");
      } else {
        res.redirect(
          url.format({
            pathname: "/dashboard",
            query: {
              firstname: user.firstname,
              lastname: user.lastname,
            },
          })
        );
      }
    }
  });
};

module.exports = { loginController, loginFormController };
