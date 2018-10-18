// routes/warbles.js

const express = require("express"),
  { createWarble, showWarble, removeWarble } = require("../handlers/warbles"),
  router = express.Router({ mergeParams: true });

router.route("/").post(createWarble);

router
  .route("/:warble_id")
  .get(showWarble)
  .delete(removeWarble);

module.exports = router;
