var net = require('net');

var configServidor = {
    'host': '127.0.0.1',
    'porta': '3000'
};


var servidor = net.createServer(function (socket)
{
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
});

servidor.listen(3000, '127.0.0.1');