//handlers/users file.
const _ = require("lodash");
const db = require("../models");

exports.showUser = async function(req, res, next) {
  try {
    let user = await db.User.findById(req.params.user_id).populate("warbles", {
      text: true,
      createdAt: true
    });
    let { id, email, username, profileImageURL } = user;
    return res.status(200).json({
      id,
      email,
      username,
      profileImageURL
    });
  } catch (err) {
    return next(err);
  }
};

exports.updateUser = async function(req, res, next) {
  try {
    const allowedFields = Object.keys(req.body).filter(f => f !== "password");
    const userData = _.pick(req.body, allowedFields);

    let user = await db.User.findOneAndUpdate(
      { _id: req.params.user_id },
      userData,
      { new: true }
    );
    let { id, email, username, profileImageURL } = user;
    return res.status(200).json({
      id,
      email,
      username,
      profileImageURL
    });
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
