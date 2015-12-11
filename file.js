var fs = require('fs');

fs.readFile('input.txt',function(err,data){
	if(err){
		return console.error(err);
	}
	console.log('Asyn reading: '+data.toString());
});

var data = fs.readFileSync('input.txt');
console.log('Syn reading: '+data.toString());