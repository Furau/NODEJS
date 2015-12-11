var fs = require('fs');

console.log('Preparing to open file!');

fs.stat('input.txt',function(err,stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log('Read file stat successfully!');
	
	console.log("is it a file? "+stats.isFile());
	console.log("is it a directory ? "+stats.isDirectory());
});