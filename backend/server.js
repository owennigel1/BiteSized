require('dotenv').config()

const express = require('express')

//express app
const app = express()
const mongoose = require('mongoose')
const restaurantsRoutes = require('./routes/restaurants')

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
}) 

//routes
app.use('/api/restaurants',restaurantsRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db and listening on port', process.env.PORT)
        })

    })
    .catch((error)=>{
        console.log(error)
    })