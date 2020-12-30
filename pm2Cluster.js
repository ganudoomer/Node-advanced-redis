const express = require('express');
const app = express();
const cryto = require('crypto');
app.get('/', (req, res) => {
	cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
		res.send('Hello World');
	});
});

app.get('/mass', (req, res) => {
	res.send('This was fast ');
});

app.listen(3000, console.log('Port 3000'));
