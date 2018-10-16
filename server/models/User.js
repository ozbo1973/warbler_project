const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  profileImageURL: {
    type: String
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warbler"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
