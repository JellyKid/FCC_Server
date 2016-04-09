var path = require('path');
var modPath = path.resolve('modules');
var express = require('express');
var port = process.env.EXPRESS_PORT || 80;

var app = express();

//place new modules here
var parsetime = require(path.resolve(modPath,'timestamp'));
var whoami = require(path.resolve(modPath,'whoami'));
var shorturl = require(path.resolve(modPath,'shorturl'));
var imgsearch = require(path.resolve(modPath,'imgsearch'));

app.get('/',function(req,res){
  res.send('hello world');
});
app.use('/time',parsetime);
app.get('/whoami', whoami);
app.use('/short',shorturl);
app.get('/imgsearch/:search',imgsearch.getClientId,imgsearch.buildPath, imgsearch.newRequest, imgsearch.sendData,imgsearch.logSearch);
app.get('/latest/imgsearch', imgsearch.getLog);

app.listen(port, function(){
  console.log('Express server started on port ' + port);
});
