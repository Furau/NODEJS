var fs = require('fs');

console.log('Preparing to delete the file!');

fs.unlink('input.txt',function(err){
	if(err){
		return console.error(err);
	}
	console.log('The file deleted!')
});