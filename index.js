var http=require('http');
var fs=require('fs');
const { isUtf8 } = require('buffer');

var server=http.createServer(function(req,res){
    if(req.url=='/'){
        var data=fs.readFileSync('home.html','utf8');
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    }
    else if(req.url=='/about'){
        var data=fs.readFileSync('about.html','utf8');
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    }
    else if(req.url=='/contact'){
        var data=fs.readFileSync('contact.html','utf8');
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    }
});
server.listen(5050,function(error){
    if(error){
        console.log("something went wrong");
    }
    else console.log("server is running");
})