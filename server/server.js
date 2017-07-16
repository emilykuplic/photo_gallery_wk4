var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5080;
var path = require('path');


app.use(bodyParser.urlencoded({extended: true}));

// Start listening for requests on a specific port
app.listen(port, function(){
  console.log('listening on port', port);
});
