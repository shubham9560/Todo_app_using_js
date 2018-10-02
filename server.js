const express = require('express')
const app = express()
const mongoose=require mongoose();
const port = process.env.PORT || 3000

app.use(express.static(__dirname+"/public_static"))

app.listen(port,()=>console.log('server started at ',port));
