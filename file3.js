var fs = require('fs');

console.log("Preparing to write file");

fs.writeFile('input.txt','Hello,Jaxa!',function(err){
	if(err){
		return console.error(err);
	}
	console.log("data write successfully!");
	console.log('--------I\'m the line--------');
	console.log('Reading the data you writed');
	fs.readFile('input.txt',function(err,data){
		if(err){
			return console.error(err);
		}
		console.log('Asyn reading file : '+data.toString());
	});
});