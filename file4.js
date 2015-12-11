var fs = require('fs');
var buf = new Buffer(1024);

console.log('Preparing to open the existing file!');

fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log('File open successfully!');
	console.log('Preparing to read the file: ');
	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
		if(err){
			console.log(err);
		}
		console.log(bytes+' bytes had readed');
		if(bytes>0){
			console.log(buf.slice(0,bytes).toString());
		}
	});
});