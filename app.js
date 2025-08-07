const express = require('express')

const app = express()

app.get('/',(req,res)=>{
res.status(202).send("PORT IS UP Yo for cicd version vscode  ")    
})
app.listen('8080',()=>{
    console.log("PORT IS UP")
})
