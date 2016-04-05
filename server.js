var path = require('path');
var modPath = path.resolve('modules');
var express = require('express');
var port = process.env.EXPRESS_PORT || 80;

var app = express();

var parsetime = require(path.resolve(modPath,'timestamp'));

app.get('/',function(req,res){
  res.send('hello world');
});
app.use('/time',parsetime);

app.listen(port, function(){
  console.log('Express server started on port ' + port);
});
