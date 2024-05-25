import express from "express"
const app=express();
app.get("/",(req,res)=>{
    res.send("The server side working properly...")
})
app.listen(3000,()=>{
    console.log("The port was run in 3000");
})