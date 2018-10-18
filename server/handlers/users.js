//handlers/users file.
const db = require("../models");

exports.showUser = async function(req, res, next) {
  try {
    let user = await db.User.findById(req.params.user_id).populate("warbles", {
      text: true,
      createdAt: true
    });
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.updateUser = async function(req, res, next) {
  try {
    let { email, username, profileImageURL } = req.body;
    let userData = { email, username, profileImageURL };
    let user = await db.User.findOneAndUpdate(
      { _id: req.params.user_id },
      userData,
      { new: true }
    );
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.removeUser = async function(req, res, next) {
  try {
    let foundUser = await db.User.findById(req.params.user_id);
    await foundUser.remove();
    return res.status(200).json(foundUser);
  } catch (err) {
    return next(err);
  }
};
