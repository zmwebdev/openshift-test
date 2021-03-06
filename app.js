// form
// http://expressjs.com/4x/api.html#req.params
var express = require('express');
var app = express();

// body-parser for POST
// https://github.com/expressjs/body-parser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// public files
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.redirect('hello.html');
});


/*var server = app.listen(process.end.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});*/

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;
var ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "127.0.0.1";

var server = app.listen(port, ip, function(){
    console.log('Listening in port %d', server.address().port);
});