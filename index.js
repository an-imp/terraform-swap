var express = require('express');
var app = express();
const path = require("path");
const port = process.env.PORT || 1337;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

