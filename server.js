var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + ':' + PORT + req.url);
  } else {
    next();
  }
});

//Path
app.use(express.static('public'));

//Start - port, callback function
app.listen(PORT, function(){
  console.log("Express server is up on port " + PORT);
});
