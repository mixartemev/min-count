const [http, fresh] = [
    require('http'),
    //fresh count closure
    () => {
        let visits = [];
        return () => {
            let i = 0;
            //find first index, whos timestamp older 1min
            while (visits[i] < Date.now() - 60*1000) { i++ }
            visits.splice(0, i);
            visits.push(Date.now());
            return visits.length;
        }
    }
];

const count = fresh();

http.createServer((req, res) => {
    switch (req.url){
        case '/':
            res.end('views/min: ' + count());
            break;

        default:
            res.statusCode = 404;
            res.end('Not found');
    }
}).listen(3000);