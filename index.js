var express = require('express');
var app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
