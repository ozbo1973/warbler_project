//Server index js.
const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser");
// XXXRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use("/api/XXX", XXXRoutes);
app.get("/", (req, res) => {
  res.send("backend WARBLER");
});

//error handling
app.use((req, res, next) => {
  let err = new Error("NOT FOUND");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
