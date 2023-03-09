const person = require('./learn_node_module');
console.log(person);

const url = require('url');
const myUrl = new URL('https://movie.douban.com/subject/36188879/?tag=%E7%83%AD%E9%97%A8&from=gaia');

// find url
console.log(myUrl.herf);
//find host
console.log(myUrl.host);
//hostname(does not get port)
console.log(myUrl.hostname);
//path name
console.log(myUrl.pathname);
// serialized query s
console.log(myUrl.search);
// params object
console.log(myUrl.searchParams);





