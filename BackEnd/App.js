
const express=require('express')
const cors=require('cors')          //Cross-origin Resource Sharing in Nodejs(to connect frontend with backend)
const {db}=require('./db/db')       //to run the database from cloud
const app=express()
const {readdirSync} =require('fs')  //to read information from specific directory
const { route } = require('./Routes/transation.route')
require ('dotenv').config()

//middlewares
app.use(express.json())
app.use(cors())


//Routes
readdirSync('./Routes').map((route)=>app.use('/api/v1', require('./Routes/'+route)))

const PORT=process.env.PORT




const server=()=>{
    db()
    app.listen(PORT, ()=>{
        console.log('Port is running on : ', PORT)
    })
}

server()