var buf = new Buffer(256);

var len = buf.write('http://suika.in');
console.log("Write bytes : "+len);

for(var i = 0;i<26;i++){
	buf[i]=i+97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));

var buf1 = new Buffer(7);
buf1.write('abcdefg');
var json = buf1.toJSON(buf1);
console.log(json);

var buf2 = new Buffer(6);
buf2.write('Hello,');
var buf3 = new Buffer(5);
buf3.write('Suika');
var buf4 = Buffer.concat([buf2,buf3]);
console.log(buf4.toString());