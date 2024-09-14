import mongoose, { mongo, Mongoose } from "mongoose";

const jobSchema =new mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required:true
 },
 requirements:{
    type:String,
   
 },
 salary:{
    type:Number,
    required:true
 },
 location:{
    type:String,
    required:true
 },
 jobType:{
 type:String,
 required:true
},
position:{
type:Number,
required:true
},
company:{
type:Mongoose.Schema.Types.ObjectId,
ref:'Company',
required:true
},
created_by:{
    type:Mongoose.Schema.Types.ObjectId,
ref:'User',
required:true

},
applications:[
    {
        type:Mongoose.Schema.Types.ObjectId,
ref:'Application',
    }
]
})

export default job=mongoose.model("Job",jobSchema)