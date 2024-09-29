const express =require('express')
require('dotenv').config()
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(process.env.PORT,()=>{
    console.log(`App listning on port ${process.env.PORT}`)
})