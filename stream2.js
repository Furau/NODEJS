var fs = require('fs');
var data = 'Hello,Jaxa!';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data,'UTF8');

writeStream.end();

writeStream.on('finish',function(){
	console.log('Writing finish');
});

writeStream.on('error',function(err){
	console.log(err.stack);
});

console.log('Program finish');