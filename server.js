var Server = require("node-static").Server
  , http = require("http")
  , sys = require("sys")
  , file = new Server(".", {cache: 7200, "x-that-was":"easy"})
  , cp = require("child_process")
  , fs = require("fs")
  , path = require("path")

http.createServer(function (req, res) {
  req.addListener("end", function () {
    file.serve(req, res, function (er) {
      if (er) return file.serveFile("./npm-intro.html", req, res)
    })
  })
}).listen(8000)
console.log("")
console.log("open http://localhost:8000/")
console.log("")
