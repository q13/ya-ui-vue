/**
 * 简单静态web server
 */
var connect = require('connect');
var serveStatic = require('serve-static');
var path = require("path");
connect().use(serveStatic(path.normalize(__dirname + "/../"))).listen(1320, function () {
  console.log("Info: Server setup on port: 1320, access http://127.0.0.1:1320/");
});
