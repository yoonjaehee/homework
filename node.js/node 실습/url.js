const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.weehan.com');
console.log('new URL():', myURL);
console.log('url.format(): ', url.format(myURL));