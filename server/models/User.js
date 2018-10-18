const mongoose = require("mongoose"),
  bcrypt = require("bcryptjs"),
  Warble = require("./Warble");

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
  warbles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warble"
    }
  ]
});

userSchema.pre("save", async function(next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.pre("remove", async function(next) {
  try {
    //query warbles where user equals user being deleted.
    let warbles = await Warble.remove({ user: this._id });
    //remove all warbles from above.
    console.log(warbles);
    //Warble.remove(warbles);
    //return next
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function(userPassword, next) {
  try {
    let isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

module.exports = mongoose.model("User", userSchema);
