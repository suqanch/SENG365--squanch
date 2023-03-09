// express course

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;



// send函数可以返回一切东西，html 文本，路径，端口等等等等
// send只执行一次，相当于return 之后的东西都不会执行
// 也就是说send后的next（）都不会执行
// app.get('/', (req,res)=>{
//     res.send('<h1>Hello World!!</h1>');
// });


// 匹配字符可以用正则表达式 比如 ab?cd 表示匹配acd 或者abcd
// + 表示任意数量b+ n个b
// * 表示任意字符 a*b  a与b之间任意字符
// app.get('/', (req,res)=>{
//     res.send('<h1>Hello reg expression!!</h1>');
// });

// 冒号表示占位符 只要满足前缀为/ab/ 就行
// app.get('/ab/:id', (req,res)=>{
//     res.send('<h1>got you!!</h1>');
// });


const func1 = (req,res,next) => {
    console.log("we are in func1");
    res.f1 = 'miles';
    next();
};
const func2 = (req,res) => {
    res.send(`what we got in func1 ${res.f1}`);
};

app.get('/testfunc', [func1,func2]);


app.listen(PORT, ()=>console.log(`server start on ${PORT}`));