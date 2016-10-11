var express = require("express");
var app = express();
var path = require("path");
/*
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});
*/

app.use(express.static('public'));

app.listen(9000);

console.log("Running on port 9000");
