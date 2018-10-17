//handlers/warbles file..

const db = require("../models");

exports.getWarbles = async function(req, res, next) {
  try {
    let warbles = await db.Warble.findById(req.params.warble_id);
    return res.status(200).json(warbles);
  } catch (err) {
    return next(err);
  }
};

exports.createWarble = async function(req, res, next) {
  try {
    let { text } = req.body.text;
    let { userId } = req.params.user_id;
    let warble = await db.Warble.create({
      text,
      user: userId
    });
    let foundUser = await db.User.findById(userId);
    foundUser.warbles.push(warble.id);
    await foundUser.save();
    let foundWarble = await db.Warble.findById(warble.id).populate("user", {
      username: true,
      profileImageURL: true
    });
    return res.status(200).json(foundWarble);
  } catch (err) {
    return next(err);
  }
};

exports.removeWarble = async function(req, res, next) {
  try {
    let foundWarble = await db.Warble.findById(req.params.warble_id);
    await foundWarble.remove();
    return res.status(200).json(foundWarble);
  } catch (err) {
    return next(err);
  }
};
