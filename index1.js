var server = require('./server1');
var router = require('./route');

server.start(router.route);