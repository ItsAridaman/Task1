var express=require('express');
var app=express();

app.listen(4000,()=>
{
    console.log("server is running");
})

app.use(express.json());

app.post('/hello',(req,res)=>
{
    console.log("hello there");
   res.send("hi there");
});

app.get('/hello',(req,res)=>
{
    res.send("hello there");
});



