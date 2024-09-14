
import mongoose, { Mongoose } from "mongoose";

const userSchema=new mongoose.Schema ({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String}, //url
        resumeOriginalName:{type:String},
        company:{type:Mongoose.Schema.Types.ObjectId,ref:'Company'},
        profilePhoto:{
            type:String,
            default:""
        },
fullName:{
        type:String,
        required:true
    }

    },
    
},{timestamps:true}) //so that our timestamps also recorex
export const User=mongoose.model('User',userSchema)