import mongoose from "mongoose";

const mongoURL="mongodb://localhost:27017/DivProj1";

mongoose.connect(mongoURL);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("db connected");
})
db.on('disconnected',()=>{
    console.log("db disconnected");
})
db.on('connectionError',(err)=>{
    console.log("connection error :",err);
})
export default db;