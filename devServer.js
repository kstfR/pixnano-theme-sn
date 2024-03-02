// const http = require('http');

// const static = require('node-static');

// const port = process.argv[2] || '8080';

// const dir = new static.Server(__dirname, {
// 	headers: {
// 		'Access-Control-Allow-Origin': '*',
// 		'Access-Control-Allow-Methods': 'GET, OPTIONS',
// 		'Access-Control-Allow-Headers': '*',
// 	},
// });

// http.createServer(function (req, res) {
// 	dir.serve(req, res);
// }).listen(port);

// terminal -> npm run serve
// standard notes -> plugins -> install -> http://localhost:8005/ext.json
//
// ext.json
//	"url": "http://localhost:8005/src/main.css",
//	"latest_url": "http://localhost:8005/ext.json",

// git tag v0.0.1
// git push origin v0.0.1
// https://git-scm.com/book/en/v2/Git-Basics-Tagging (for deleting and stuff..)
