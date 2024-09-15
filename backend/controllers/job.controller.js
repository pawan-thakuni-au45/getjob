
import {Job} from "../models/job.model.js";
export const JobRegister =async(req,res)=>{
    try{
        const {title,description,jobType,location,requirement,salary,company,experiencelavel,position,created_by}=req.body
    const userId=req.id

    if(!title || !description || ! jobType || !location || !requirement ||!salary || !company || !experiencelavel ||!position ){
        return res.status(400).json({
            message:"Something is missing",
            success:false
        })
    }
    

     const job= await Job.create({
        title,description,jobType,location,requirement,salary,company,experiencelavel,position,created_by:userId
    })
    if(!job){
        return res.status(400).json({
            message:"jon not found",
            
            success:false
        })
    }
    return res.status(200).json({
        message:"job created",
        job,
        success:true
    })
  

    }catch(error){
        console.log(error)
    }
    
      

    }

    export const getAllJob = async(req,res)=>{
        try{
         const keyword=req.query.keyword || " "
         const query={
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},

            ]
         }
         const job=await Job.find(query)
         if(!job){
            return res.status(400).json({
                message:"no job found",
                success:false
            })
         }
         return res.status(200).json({
            job,success:true
         })
        }catch(error){
console.log(error)
        }
    }
//student
    export const getJobById=async(req,res)=>{
        try{
             const jobId=req.params.id
             const job=await Job.findById(jobId)
             if(!job){
                return res.status(400).json({
                    message:"no job found",
                    success:false
                })
                
             }
             return res.status(200).json({
                job,
                success:true
             })

        }catch(error){
            console.log(error)
        }
    }
///admin
    export const getAdminJobs  = async(req,res)=>{
        try{
            const adminId=req.id
            const job=await Job.find({created_by:adminId})
            if(!job){
                return res.status(400).json({
                    message:"no job found",
                    success:false
                })
              
            }
            return res.status(200).json({
                job,
                success:true
            })

        }catch(error){
            console.log(error)
        }
    }