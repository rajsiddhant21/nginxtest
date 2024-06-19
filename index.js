const express = require('express');
let app = express();

app.get('/',(req,res)=>{
    return res.status(200).send('Normal Route');
})

app.get('/user',(req,res)=>{
    return res.status(200).send('user Route');
})

app.listen(8001,()=>{
    console.log('Port Running')
})