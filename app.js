var express     = require('express');
var path        = require('path');
var favicon     = require('serve-favicon');
var bodyParser  = require('body-parser');
var http        = require('http');

var app = express();
var port = process.env.PORT || '3000';
app.set('port', port);
app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/node_modules'));
// app.use(express.static(__dirname + '/index.html'));
// app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(__dirname));

app.get('*', function(req, res){
    res.sendFile( __dirname + '/index.html' );
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


var server = http.createServer(app);

server.listen(port, function () {
  console.log('Listening on port' + port);
});