const https = require('https');
const start = Date.now();
const cryto = require('crypto');
const fs = require('fs');

function doRequest() {
	https
		.request('https://www.google.com', (res) => {
			res.on('data', (data) => {});
			res.on('end', () => {
				console.log(Date.now() - start);
			});
		})
		.end();
}

function doHAsh() {
	cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
		console.log('1:', Date.now() - start);
	});
}

function doFs() {
	fs.readFile('test.js', 'utf8', () => {
		console.log('FS', Date.now() - start);
	});
}

doRequest();
doFs();
doHAsh();
doHAsh();
doHAsh();
doHAsh();
