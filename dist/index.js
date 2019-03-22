"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 5500;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  return res.send('Hello forsetti!');
});
app.listen(port, function () {
  return console.log("Forsetti-blog listening on port ".concat(port, "!"));
});