let express = require('express');

let app = express();
let server = app.listen(3000);

app.use(express.static('public'));

console.log("My server is running!!");

let socket = require('socket.io');

let io = socket(server);

io.on('connection', (socket) => {
  console.log('new connection: ' + socket.id);
});