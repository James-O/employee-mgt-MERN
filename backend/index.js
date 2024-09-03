import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())
// CORS configuration
// app.use(cors({
//     //origin: ["https://employee-mgt-mern-frontend.vercel.app"],
//     origin: ["*"],
//     methods: ["POST", "GET"],
//     //credentials: true,
// }));

app.use(cookieParser())
app.use('/auth', UserRouter)

//mongoose.connect('mongodb://127.0.0.1:27017/authentication')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.listen(process.env.PORT, ()=>{
    console.log("Server is running")
})