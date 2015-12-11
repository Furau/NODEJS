var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
	res.send('Hello World');
});

var server = app.listen(8888,function(){
	var port = server.address().port;
	console.log('Server is running on port :%s',port);
});