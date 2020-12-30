const cryto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 5;
// Functioning of the event loop
cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
	console.log('1:', Date.now() - start);
});
cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
	console.log('2:', Date.now() - start);
});
cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
	console.log('3:', Date.now() - start);
});
cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
	console.log('4:', Date.now() - start);
});
cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
	console.log('5:', Date.now() - start);
});
cryto.pbkdf2('ad', 'asf', 100000, 512, 'sha512', () => {
	console.log('6:', Date.now() - start);
});
