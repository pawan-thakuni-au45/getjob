
import { Application } from "../models/application.model"
export const applyJob=async(req,res)=>{
    try{
        userId=req.id
        const jobId=req.params.id
        if(!jobId){
            return res.status(400).json({
                message:"job id is required",
                success:false
            })
        }
        //check if user has already apply for the job
        const regApplication =await Application.findOne()
        

    }catch(error){
        console.log(error)
    }
}