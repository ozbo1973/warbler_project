const mongoose = require("mongoose");
const User = require("./User");

const warbleSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 160
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

warbleSchema.pre("remove", async function(next) {
  try {
    let user = await User.findById(this.user);
    user.warbles.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Warble", warbleSchema);
