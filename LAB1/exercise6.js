// express course

const express = require('express');
const app = express();
const data = require('./user.json');
const users = data.users;
const PORT = process.env.PORT || 5000;

console.log(users);

app.get('/', (req,res)=>{
    res.status(200).send(users);
});
app.get('/users',(req,res)=>{
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


// app.use((req,res,next) => {
//     res.status(404)
//     .send("404 not found");
// });
// app.listen(PORT, ()=>console.log(`server start on ${PORT}`));