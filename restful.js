var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers',function(req,res){
	fs.readFile(__dirname+'/'+'users.json','utf8',function(err,data){
		if(err){
			return console.error(err);
		}
		console.log(data);
		res.end(data);
	});
})

var server = app.listen(8888,function(){
	var port = server.address().port;
	console.log('Server is running on port : %s',port);
})