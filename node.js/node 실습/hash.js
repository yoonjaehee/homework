const crypto = require('crypto');

console.log(crypto.createHash('sha512').update('재희재힁').digest('base64'));