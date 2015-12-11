var fs = require('fs');

console.log('Create Directory /tmp');

fs.mkdir('/tmp/',function(err){
	if(err){
		return console.error(err);;
	}
	console.log('Directory created!');
});