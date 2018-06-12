const [http, fresh] = [
    require('http'),
    require('./fresh')//count closure
];

http.createServer((req, res) => {
    switch (req.url){
        case '/':
            res.end('views/min: ' + fresh());
    }
}).listen(3000);