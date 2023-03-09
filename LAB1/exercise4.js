const http = require('http');
const { URLSearchParams } = require('url');
const URL = require('url').URL;

const shopping = ['milk', 'bread',
    'eggs', 'flour'
];
http.createServer((request, response) =>{
    // Send the HTTP header
    // HTTP Status: 200 (OK)
    // Content Type: text/plain
    const url = new URL(request.url, 'http://localhost');
    const parameters = url.searchParams.get("itemNum");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body as "Hello World"
    console.log(parameters);

    response.end(`Here is your data: ${shopping[parameters]}`);
}).listen(8081);

