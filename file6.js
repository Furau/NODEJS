var fs = require('fs');
var buf = new Buffer(1024);

console.log("Preparing to open the file!");

fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log('File open successfully!');
	console.log('Slice the content after 5 bytes.');
	fs.ftruncate(fd,5,function(err){
		if(err){
			return console.error(err);
		}
		console.log('File slice successfully!');
		console.log('Read the same file');
		fs.read(fd,buf,0,buf.length,0,function(err,bytes){
			if(err){
				console.error(err);
			}
			if(bytes>0){
				console.log(buf.slice(0,bytes).toString());
			}
		fs.close(fd,function(err){
			if(err){
				console.log(err);
			}
			console.log("File close successfully!");
		});
		});
	});
});