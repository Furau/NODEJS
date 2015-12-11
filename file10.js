var fs = require('fs');

console.log('Delete /tmp directory!');

fs.rmdir('/tmp',function(err){
	if(err){
		return console.error(err);
	}
	console.log('The /tmp directory had deleted!');
});