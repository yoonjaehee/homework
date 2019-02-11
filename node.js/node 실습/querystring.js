const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://weehan.com');
const query = querystring.parse(parsedUrl.query);