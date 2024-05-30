import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";
import Content from "./Models/Content.js";

const app=express();
const port=3000;

app.use(bodyParser.json());

app.post('/submit',async (req,res)=>{
    try{
        const data=req.body;
        const newContent=new Content(data);
        await Content.create(newContent);
        res.sendStatus(201);
    }catch(error){
        console.log("error occured :",error);
        res.sendStatus(500);
    }
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})