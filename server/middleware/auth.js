//middleware/auth file.
require("dotenv").load;
const jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next) {
  let errMessage = "Please Login first.";
  try {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        return next();
      }
      return next(logError(errMessage));
    });
  } catch (err) {
    return next(logError(errMessage));
  }
};

exports.ensureCorrectUser = function(req, res, next) {
  let errMessage = "UnAuthorized";
  try {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded && decoded.id === req.params.user_id) {
        return next();
      }
      return next(logError(errMessage));
    });
  } catch (err) {
    return next(logError(errMessage));
  }
};

const logError = message => ({
  status: 401,
  message
});
