var express = require('express');
var app = express();
var fs = require('fs');


var id = 2;

app.get('/deleteUser',function(req,res){
	fs.readFile(__dirname+'/'+'users.json','utf8',function(err,data){
		data = JSON.parse(data);
		delete data["user"+2];
		console.log(data);
		res.end(JSON.stringify(data));
	});
});

var server = app.listen(8888,function(){
	var port = server.address().port;
	console.log('Server is running on port : %s',port);
});