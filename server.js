var express = require('express');
var index = require('./routes/index');
var olympics = require('./routes/olympics');
var path = require('path');
var app = express();

//static files
app.use(express.static('public'));
app.use(express.static('node_modules/angular'));
app.use(express.static('node_modules/angular-route'));
app.use(express.static('node_modules/bootstrap'));

//routers
app.use('/', index);
app.use('/olympics', olympics);
app.get('/*', function(request, response){
  response.sendFile(path.join(__dirname, './public/views/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
