


import { Company } from '../models/company.model.js';

export const registerCompany = async(req,res)=>{

    try{
        const {name}=req.body;

    let company= await Company.findOne({name})
     if(company){
        return res.status(400).json({
            message:"Company already exist",
            success:false
        })
     }
      company = await Company.create({
        name,
        userId:req.id
        
        
        
     })
    
     return res.status(201).json({
        message:"company register succesfully",
        company,
        success:true

     })

    }catch(error){
        console.log(error)
    }

    
}

export const getCompany =async(req,res)=>{
   const  userId=req.id
   console.log(userId)
    const companies=await Company.find({userId})
    if(!companies){
        return res.status(400).json({
            message:"company not found",
            success:false
        })
    }
    return res.status(200).json({
      companies,
      success:true
    })
    
}

// get company by id
export const getCompanyById=async(req,res)=>{

    try{
         const companyId=req.params.id
         const company=await Company.findById(companyId)
         if(!company){
            return res.status(400).json({
                message:"company not found",
                success:true
            })
         }
         return res.status(200).json({
            company,
            success:true
         })

    }catch(error){
        console.log(error)
    }
}

export const updateCompany= async(req,res)=>{
    try{

         const {name,description,website,location}=req.body


         const updateData={name,description,website,location}
         const company=await Company.findByIdAndUpdate(req.params.id,updateData,{new:true})

         if(!company){
            return res.status(400).json({
                message:"company not exist",
                success:false
            
         })
         }
         return res.status(200).json({
            message:"company information updated",
            success:true
         })
            }catch(error){
        console.log(error)
    }
}