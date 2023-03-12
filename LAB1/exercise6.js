// express course

const express = require('express');
const app = express();
const data = require('./user.json');
const bodyParser = require('body-parser');
const users = data.users;
const PORT = process.env.PORT || 5000;

console.log(users);
// Tell the express app to expect json in the body of the request (must be before any routes)
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.status(200).send(users);
});
// parseInt方法接收两个参数，parseInt(string，radix?)；
// string：要被解析的值。如果参数不是一个字符串，则将其转换为字符串(toString)。字符串开头的空白符将会被忽略。
// radix：可选。从 2 到 36，表示被解析的值的进制。例如说指定 10 就等于指定十进位。
// 将字符串转为整数  ex.001 => 1

// 检查登录ID是否正确
app.get('/users/:id',(req,res)=>{
    const id  = req.params.id;
    let response = `no user with id ${id}`;
    for (const user of users){
        if (parseFloat(id,10)===user.id){
            response = user
            break;
        }
    res.status(200).send(response);
    }
});

app.post('/users',(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.status(201)// POST requests should return 201 if they create something.
    send(users);
});
app.put('/user/:id',(req,res) => {
    const id = req.params.id;
    const updateduser = req.body;
    for (const user of users){
        if(parseInt(id,10)===user.id){
            const index = users.indexOf(user);
            users[index] = updateduser;
            break;
        }
    }
    res.status(200).send(updateduser);

});

// splice() 方法用于添加或删除数组中的元素。(index, del num)
app.delete('users/:id', (req,res)=>{
    const id = req.params.id;
    for (const user in users){
        if(parseInt(id,10)===user.id){
            const index = users.indexOf(user);
            users.splice(index,1);// Remove 1 user from the array at this index
        }
    }
    res.send(users);
});


// app.use((req,res,next) => {
//     res.status(404)
//     .send("404 not found");
// });
app.listen(PORT, ()=>console.log(`server start on ${PORT}`));