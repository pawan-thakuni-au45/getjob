import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import ConnectDb from "./utils/db.js"
import dotenv from "dotenv"
dotenv.config({})


const app=express()
app.use(express.json())
app.use(cookieParser())
const corsOptions={
    origin:"http//localhost:5173",
    Credential:true
}
app.use(cors(corsOptions))




const PORT= process.env.PORT || 3000
app.listen(PORT,()=>{
    ConnectDb()
    console.log(`server is running in port ${PORT}`);
})