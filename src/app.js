const express = require('express');

const app = express();
app.use("/test",(req,res)=>{
    res.send("Hello from the test test test test server")
})
app.use("/hello",(req,res)=>{
    res.send("Hello  Hello Hello Hello  Hellofrom the server")
})
app.use((req,res)=>{
    res.send("Hello from the server")
})
app.listen(3000,()=>{
    console.log("server is successful on port 3000")
});