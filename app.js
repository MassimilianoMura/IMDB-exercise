var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  console.log(req);
  res.render('index');

});

var server = app.listen(3000, function() {
  console.log('server is running');
});