const db = require("../models"),
  jwt = require("jsonwebtoken");

exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username, profileImageURL, email } = user;
    let token = jwt.sign(
      {
        id,
        username,
        profileImageURL,
        email
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      profileImageURL,
      username,
      email,
      token
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message =
        "Sorry that username/email has already been taken. Please choose another.";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};

exports.signin = async function(req, res, next) {
  try {
    let user = await db.User.findOne({ email: req.body.email });
    let { id, username, profileImageURL, email } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = getToken(user);
      return res.status(200).json({
        id,
        profileImageURL,
        username,
        email,
        token
      });
    } else {
      return next({
        status: 400,
        message: "Invalid password/email"
      });
    }
  } catch (err) {
    return next({
      status: 400,
      message: "Invalid password/email"
    });
  }
};

const getToken = user => {
  let { id, profileImageURL, username } = user;
  let token = jwt.sign(
    {
      id,
      username,
      profileImageURL
    },
    process.env.SECRET_KEY
  );
  return token;
};
