const http = require("http");

http
    .createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            "name": "Jan"
        }));
    })
    .listen(8080);