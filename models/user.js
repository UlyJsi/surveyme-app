const mongoose = require("mongoose"); // assign DB
const Schema = mongoose.Schema; // assign "describing map"

const userSchema = new Schema({
  googleId: String, // column
  facebookId: String
});

mongoose.model("users", userSchema); // create if lack
