process.env.UV_THREADPOOL_SIZE = 1;
const express = require('express');
const app = express();
const cluster = require('cluster');
const cryto = require('crypto');
// Is the file being excuted in master mode ?
if (cluster.isMaster) {
	//Cause index  to be executed again but
	//in Child Mode
	cluster.fork();
	cluster.fork();

	// cluster.fork();
	// cluster.fork();
	// cluster.fork();
} else {
	// I am child , I am gonna be the same

	app.get('/', (req, res) => {
		// doWork(5000);
		cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
			res.send('Hello World');
		});
	});

	app.get('/mass', (req, res) => {
		res.send('This was fast ');
	});

	app.listen(3000, console.log('Port 3000'));
}

// function doWork(duration) {
//     const start = Date.now();
//     while (Date.now() - start < duration) {}
// }
