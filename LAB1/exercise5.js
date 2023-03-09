// express course

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('http request: GET/');
});
app.post('/', (req,res)=>{
    res.send('http request: USE/');
});


// app.use((req,res,next) => {
//     res.status(404)
//     .send("404 not found");
// });
app.listen(PORT, ()=>console.log(`server start on ${PORT}`));