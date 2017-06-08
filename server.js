var express = require('express');

// Create our app
var app = express();

//Path
app.use(express.static('public'));

//Start - port, callback function
app.listen(3000, function(){
  console.log("Express server is up on port 3000");
});
