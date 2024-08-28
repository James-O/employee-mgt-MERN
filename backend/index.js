import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors({
    origin:['http://localhost:3000',"https://employee-mgt-mern-frontend.vercel.app"],
    methods:["POST","GET"],
    credentials:true,
    optionSuccessStatus:200
}))
app.use(cookieParser())
app.use('/auth', UserRouter)

//mongoose.connect('mongodb://127.0.0.1:27017/authentication')
mongoose.connect('mongodb+srv://James:jamesdgr81A!@atlascluster.vzvs9.mongodb.net/authentication?retryWrites=true&w=majority&appName=AtlasCluster')

app.listen(process.env.PORT, ()=>{
    console.log("Server is running")
})