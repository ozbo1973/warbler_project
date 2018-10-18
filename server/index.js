//Server index js.
require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  errorHandler = require("./handlers/error"),
  authRoutes = require("./routes/auth"),
  warbleRoutes = require("./routes/warbles"),
  { getWarbles } = require("./handlers/warbles"),
  { loginRequired, ensureCorrectUser } = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:user_id/warbles",
  loginRequired,
  ensureCorrectUser,
  warbleRoutes
);

app.get("/api/warbles", loginRequired, getWarbles);

app.get("/", (req, res) => {
  res.send("WARBLER");
});

//error handling
app.use((req, res, next) => {
  let err = new Error("NOT FOUND");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
