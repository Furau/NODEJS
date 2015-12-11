var express = require('express');
var app = express();

app.get('/index.html',function(req,res){
	res.sendFile(__dirname+'/'+"index.html");
});

app.get('/process_get',function(req,res){
	 response={
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8888,function(){
	var port = server.address().port;
	console.log('Server is running on port : %s',port);
});