const http = require('http');
let cnt = [];

http.createServer(function (req, res) {
    switch (req.url){
        case '/':
            fresh();
            cnt.push(Date.now());
            res.end('views/min: ' + cnt.length);
            console.log(cnt);
            break;

        default:
            res.statusCode = 404;
            res.end('Not found');
    }
}).listen(3000);

function fresh() {
    let i = 0;
    while (cnt[i] < Date.now() - 60*1000){
        i++;
    }
    cnt.splice(0, i);
}

////for ajax update
// setInterval(function () {
//     fresh()
// }, 1000);