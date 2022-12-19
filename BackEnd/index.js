const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes/bookRoutes')
const cors=require('cors')
const app=express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use("/books",router)

// mongoose.connect('mongodb+srv://admin:Qes4D4SA2V2IhAzv@cluster0.89pdeoh.mongodb.net/bookStore?retryWrites=true&w=majority').then(()=>{console.log("connected to DB");}).then(()=>{
//     app.listen(8000)
// }).catch((err)=>{})

mongoose.connect('mongodb://localhost:27017/test').then(()=>{console.log("connected to DB");}).then(()=>{
    app.listen(8000)
 }).catch((err)=>{})