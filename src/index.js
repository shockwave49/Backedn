
import express from "express"
import conncetDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path:"./env"
})





conncetDB()
















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