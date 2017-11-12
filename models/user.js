const mongoose = require("mongoose"); // assign DB
const Schema = mongoose.Schema; // assign "describing map"

const userSchema = new Schema({
  googleId: String // column
});

mongoose.model("users", userSchema); // create if lack
