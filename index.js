const express = require('express');
const app = express();

function doWork(duration) {
	const start = Date.now();
	while (Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
	doWork(5000);
	res.send('Hello World');
});

app.get('/mass', (req, res) => {
	res.send('Hello World');
});

app.listen(3000, console.log('Port 3000'));
