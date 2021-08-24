const User = require("../models/user");
const url = require("url");
const loginController = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else if (!user) {
      res.redirect("/register");
    } else {
      console.log(password, user.password);

      if (password != user.password) {
        res.redirect("/");
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
        console.log("Successfully logged in!");
        console.log(user);
      }
    }
  });
};

module.exports = { loginController };
