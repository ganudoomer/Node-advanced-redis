const express = require('express');
const app = express();
const Worker = require('worker_threads').Worker;
app.get('/', (req, res) => {
	const worker = new Worker(function() {
		this.onmessage = function() {
			let counter = 0;
			while (counter < 1e9) {
				counter++;
			}
			postMessage(counter);
		};
	});
	worker.onmessage = function(myCounter) {
		console.log(myCounter);
	};
	worker.postMessage();
	res.send('Hello World');
});

app.get('/mass', (req, res) => {
	res.send('This was fast ');
});

app.listen(3000, console.log('Port 3000'));
