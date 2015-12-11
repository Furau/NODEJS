var http = require('http');


var options = {
   host: 'localhost',
   port: '8888',
   path: '/index.html'  
};


var callback = function(res){
  
   var body = '';
   res.on('data', function(data) {
      body += data;
   });
   
   res.on('end', function(err) {
	  if(err){
		  return console.error(err);
	  }
      console.log(body);
   });
}

var req = http.request(options, callback);
req.end();