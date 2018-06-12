const http = require('http');
//global arr of visit timestamps
let cnt = [];

http.createServer((req, res) => {
    switch (req.url){
        case '/':
            //del all visits older 1min
            cnt = cnt.filter(visitTime => visitTime > Date.now() - 60*1000);
            //push current visit timestamp
            cnt.push(Date.now());
            res.end('views/min: ' + cnt.length);
    }
}).listen(3000);
