const util = require('util');
const crypto = require('crypto');

const dontuseme = util.deprecate((x,y) => {
    console.log(x+y);
},'이 함수는 2018년 이후로 지원하지 않습니다.');

dontuseme(1,2);

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt', salt);
    crypto.pbkdf2('jaehee solo', salt, 651395, 64, 'sha512', (err,key) => {
        console.log('password', key.toString('base64'));
    });
});