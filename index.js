var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('pages/index');
});

//app.listen(6969);
//console.log('6969 is the magic port');
