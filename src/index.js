
import express from "express"
import conncetDB from "./db/index.js"
import dotenv from "dotenv"
import {app }from "./app.js"

dotenv.config({
    path:"./env"
})





conncetDB().then(()=>{
    app.listen(process.env.PORT ||8000 )
    console.log(`server is running at ${process.env.PORT}`)
    

}).catch((err)=>{
    console.log("MONGO BD ERROR -->>", err)
})
















// const app=express()

// ( async()=>{

//     try {

//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//        app.on("error",(error)=>{
//         console.log(error)
//         throw error
//        })

//        app.listen(process.env.PORT ,()=>{
//         console.log(`app is listening to port ${process.env.PORT}`)
//        })
        
//     } catch (error) {
//         console.log(error)
//     }
// })