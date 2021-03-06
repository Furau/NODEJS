var express = require('express');
var app = express();
var fs = require('fs');

app.get('/:id',function(req,res){
	fs.readFile(__dirname+'/'+'users.json','utf8',function(err,data){
		data = JSON.parse(data);
		var user = data["user"+req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
	});
});

var server = app.listen(8888,function(){
	var port = server.address().port;
	console.log('Server is running on port %s ',port);
})