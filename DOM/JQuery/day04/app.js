const http = require("http");
const url = require("url");
http.createServer((req, res) => {
  var weather = "rain 3~10 in Liu...";
  // res.writeHead(200, {
  //   "Access-Control-Allow-Origin": "*"
  // });
  // http://localhost:3001?callback=show
  //url.parse(req.url,true)
  req.query = url.parse(req.url, true).query;
  var callback = req.query.callback;
  res.write(`${callback}('${weather}')`);
  res.end();
}).listen(3001);