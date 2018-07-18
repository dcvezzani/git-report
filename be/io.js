import socketIo from 'socket.io';

function reportError(err, msg) {
  console.log(msg, err);
}

export const io = (server) => {
	
	const io = socketIo(server, { path: '/io'});

	io.on('connection', function(client) {  
		console.log('Client connected...');

		client.on('join', function(data) {
			console.log(`join: ${JSON.stringify(data)}`);
			client.emit('joined', {msg: 'Greetings program'});
		});
	});
};

