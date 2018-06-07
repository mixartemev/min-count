const http = require('http');
let cnt = [];

http.createServer((req, res) => {
    switch (req.url){
        case '/':
            cnt = cnt.filter(visitTime => visitTime > Date.now() - 60*1000);
            cnt.push(Date.now());
            res.end('views/min: ' + cnt.length);
            console.log(cnt);
            break;

        default:
            res.statusCode = 404;
            res.end('Not found');
    }
}).listen(3000);
