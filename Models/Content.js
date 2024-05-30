import mongoose from "mongoose";

const ContentSchema=new mongoose.Schema({
    date:Date,
    exercise:Boolean,
    exercisemode:{
        type:String,
        enum:["Gym","Running","Sports"]
    },
    mankibaat:String,
    score:Number,
    study:Boolean,
    studyitems:String,
    wokeup:Boolean,
    wokeuptime:Date,
    work:Boolean
})
const Content=mongoose.model('Content',ContentSchema);
export default Content;
