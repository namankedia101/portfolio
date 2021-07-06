const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Heroku will need the PORT environment variable
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("client/build"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "Something went wrong";
  }
  res.status(statusCode).send(err.message);
});
app.listen(port, () => console.log(`App started on port ${port}!`));
