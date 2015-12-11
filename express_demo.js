var express = require('express');

var app =express();

app.get('/',function(req,res){
	res.send('Hello,World!');
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var post = server.address().port;
	console.log('App example,address is http://%s:%s',host,post);
});