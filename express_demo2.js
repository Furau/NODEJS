var express = require('express');
var app = express();

app.get('/',function(req,res){
	console.log('Home page Get request');
	res.send('Hello Get!');
});

app.post('/',function(req,res){
	console.log('Home page POST request');
	res.send('Hello POST');
});

app.delete('/del_user',function(req,res){
	console.log('/del_user response request');
	res.send('Delete page');
});

app.get('/list_user',function(req,res){
	console.log('/list_user GET request');
	res.send('User list page');
});

app.get('/ab*cd',function(req,res){
	console.log('/ab*cd GET request');
	res.send('ExpReg');
});

var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('App Example, Address is http://%s:%s',host,port);
});
