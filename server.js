var express = require("express");
var ejs     = require('ejs')

var app     = express();

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
	res.set('Content-Type', 'text/plain');
	var osvar= req.headers['user-agent'];
	var ipvar = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(",")[0];
    var langvar = req.headers["accept-language"];
	res.render('results',{ip:ipvar,lang:langvar,os:osvar})
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
