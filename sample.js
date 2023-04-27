const fs = require("fs");
const http = require("http");
// fs.writeFileSync('content.txt', "content loaded buddy")

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
//     console.log(req.headers.host);
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Agricreations</title></head>");
    res.write(
      '<body><form action="/message" method="POST" ><input name="content" type="text"><input type="submit" value="send"></form><body/>'
    );
    res.write("<html/>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
        res.on('data', (chunk)=>{
                console.log("chunk data");
                console.log(chunk);
        })

    fs.writeFileSync("content.txt", "redirected");
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();

  }

//   console.log(req.headers.host);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Agricreations</title></head>");
  res.write("<body><h1>Welcome to node js</h1><body/>");
  res.write("<html/>");
  res.end();
  // process.exit();
});
server.listen(3000);
