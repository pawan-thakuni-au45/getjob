import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import ConnectDb from "./utils/db.js"
import dotenv from "dotenv"
import  route from './routes/user.route.js'
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js'

dotenv.config({})


const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions))
const PORT= process.env.PORT || 3000
//api's
app.use('/api/v1/user',route)
app.use('/api/v1/company',companyRoute)
app.use('/api/v1/job',jobRoute)





app.listen(PORT,()=>{
    ConnectDb()
    console.log(`server is running in port ${PORT}`);
})