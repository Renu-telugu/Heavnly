const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  // username and password fields are added by passport-local-mongoose
  // so we don't need to define them here
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
