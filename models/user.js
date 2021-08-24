const mongoose = require("mongoose");

/**
 * Define user schema
 * It will contain the following fields
 * firstname, lastname, email, password
 */
const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

// Create model based upon user schema
const User = mongoose.model("user", userSchema);

module.exports = User;
