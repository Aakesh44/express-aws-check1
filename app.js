const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('*',(req,res)=>{
    res.status(200).json({Message:"welcome 😍😃"})
})

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`Your app is running on ${PORT}`);
})