const http = require('http');
// Now use the http module’s createServer function to create a new server. The example code in Listing 4
// ignores the content of any request given and instead will just return a 200 OK response with the text “Hello
// World”.

http.createServer((request, response) =>{
    // Send the HTTP header
    // HTTP Status: 200 (OK)
    // Content Type: text/plain
    let url = response.url
    const method = response.method

    // 第一个是HTTP状态码，如200(请求成功），404（未找到）等。
    //     第二个是告诉浏览器发送的数据类型
    //     第三个就是具体发送的是什么数据
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body as "Hello World"
    response.end(`resqust url ${url}, method is ${method}`);
    console.log(`resqust url ${url}, method is ${method}`);
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');