var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var  urlencodedParser = bodyParser.urlencoded({extended:false});


app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8888,function(){
	var port = server.address().port;
	console.log('Server is running on port : %s',port);
});