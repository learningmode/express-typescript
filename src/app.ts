import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    return res.send("Hello world");
});

app.listen(3000,()=>{
    console.log("Application listening at localhost:3000")
})