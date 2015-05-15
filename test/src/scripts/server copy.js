var express = require('express');
var request = require('request');
var cors = require('cors');
var bodyParser = require('body-parser');
var secret1 = require('./secret1.json');
var secret2 = require('./secret2.json');

var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/'));

var url = secret1.api;
app.get("/news", function(req, res){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

var url2 = secret2.api;
app.get("/weather", function(req, res){
  request(url2, function (error, response, body) {
    // console.log(body);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});


console.log("listening on 3000")
app.listen(3000);
