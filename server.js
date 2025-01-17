var http = require('http')
var fs = require("fs")

http.createServer(function (req, res){
    const url = new URL(req.url, "http://localhost:8080")
    const path = url.pathname
    switch(path){
        case "/":
            res.writeHead(200, {"Content-Type":"text/html"})
            fs.createReadStream("index.html").pipe(res)
            break;
        case "/about":
            res.writeHead(200, {"Content-Type":"text/html"})
            fs.createReadStream("about.html").pipe(res)
            break;
        case "/contact-me":
            res.writeHead(200, {"Content-Type":"text/html"})
            fs.createReadStream("contact-me.html").pipe(res)
            break;
        default:
            res.writeHead(404, {"Content-Type":"text/html"})
            fs.createReadStream("404.html").pipe(res)
            break;
    }
}).listen(8080)

