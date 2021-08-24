const User = require("../models/user");

const registerController = (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  });
  User.create(user, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully saved new user!");
      console.log(doc);
    }
  });

  res.redirect("/");
};

module.exports = { registerController };
