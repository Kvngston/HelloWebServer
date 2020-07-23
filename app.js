const http = require('http')
const port  = process.env.PORT || 9000


const server = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type" : "application/json"});

    const url = req.url;
    if (req.method === 'POST' && url === "/" ){

        let data = []
        let payload;

        req.on("data", chunk =>  {
            data.push(chunk)
        });
        req.on("end", () => {
            payload =  JSON.parse(data).name;
            res.write(`Hello ${payload}, Welcome to WeJapa Internships`);
            res.end();
        });

    }else if (req.method === 'GET' && url === "/") {
        res.write(`Hello World, Welcome to WeJapa Internships`);
        res.end();
    }else {
        res.write("Page Not Found")
        res.end()
    }

});

server.listen(port, function() {
    console.log(`Listening on port ${port}`);
});