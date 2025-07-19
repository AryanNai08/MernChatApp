import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./Lib/db.js";

//create express app and http server

const app=express();
const server=http.createServer(app);

//middleware setup

app.use(express.json({limit:"4mb"}))
app.use(cors());

app.use("/api/status",(req,res)=> res.send("server is live!!"));


//connect to mongodb

await connectDB();

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=> console.log("Sever is running on port number:"+PORT))