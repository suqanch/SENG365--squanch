// express course

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/', (req,res)=>{
//     res.send('http request: GET/');
// });
// // GET https://example.com/user/1

app.get('/:userid', (req, res) => {
    console.log(req.params.userid) // "1"
  })
// GET https://example.com/search?keyword=great-white

app.get('/search', (req, res) => {
    console.log(req.query.keyword) // "great-white"
  })

// app.use((req,res,next) => {
//     res.status(404)
//     .send("404 not found");
// });
app.listen(PORT, ()=>console.log(`server start on ${PORT}`));