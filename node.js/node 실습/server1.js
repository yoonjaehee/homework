const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('서버 실행');
    fs.readFile('./server2.html', (err,data)=>{
        res.end(data);
    });
    res.write("<h1>hello java</h1>");
    res.end("<h5>hello node</h5>");
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기중');
});