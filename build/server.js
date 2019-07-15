var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
  console.log("开始访问");
  switch(req.url){
    case '/index.html':
        fs.readFile("./index.html",function(err,data){ //注释：index.html页面保存在与js代码的同级目录。
            if(err){
                throw err;
            }
            else{
                res.writeHeader(200,{"ContentType":"text/html"});
                res.write(data.toString());
                res.end();
            }
        })
        break;
    default:
        break;
  }
  console.log(req.url);
});
server.listen(8080);