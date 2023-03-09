const http = require('http');
const URL = require('url').URL;
// Now use the http module’s createServer function to create a new server. The example code in Listing 4
// ignores the content of any request given and instead will just return a 200 OK response with the text “Hello
// World”.

http.createServer((request, response) =>{
    // Send the HTTP header
    // HTTP Status: 200 (OK)
    // Content Type: text/plain
    const url = new URL(request.url, 'http://localhost');
    const parameters = url.searchParams;
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body as "Hello World"
    response.end(`Here is your data: ${parameters}`);
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');