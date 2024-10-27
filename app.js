const express = require('express');
const app = express();
app.use(express.json());

app.use('/items',(req,res,next)=>{
    console.log('This is middleware');
    next();
})

app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page');
})
app.get('/about',(req,res)=>{
    res.send("this is About Page")
})

app.get('/contact',(req,res)=>{
 res.send("this contact page")
})

app.get('users/:id',(req,res)=>{
    const userId = req.params.id;
    res.send('User ID: ${userId}')
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is live now`);
})