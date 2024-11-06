import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import express from "express"

const conncetDB=async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log("MongoDB connected !!!")
        
    } catch (error) {
        console.log(error)
    }
}

export default conncetDB