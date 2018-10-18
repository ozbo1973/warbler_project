//routes/users file.

const express = require("express"),
  { showUser, updateUser, removeUser } = require("../handlers/users");
router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(showUser)
  .put(updateUser)
  .delete(removeUser);

module.exports = router;
