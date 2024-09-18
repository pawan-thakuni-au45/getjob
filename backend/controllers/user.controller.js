import  {User}  from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import {z} from "zod"

export const register = async (req, res) => {


  try {
    const requiredBody= z.object({
      email:z.string().min(3).max(100).email(),
      fullName:z.string().min(3).max(100),
      password:z.string().min(3).max(100)
    })
    const parseDataWithSuccess =  requiredBody.safeParse(req.body)
    if(!parseDataWithSuccess.success){
      return res.status(400).json({
        message:"wrong format",
        
       error:parseDataWithSuccess.error
      })
      return 
    }

    const { fullName, password, email, phoneNumber, role } = req.body
  
    if (!fullName || !password || !email || !phoneNumber || !role) {
      return res.status(400).json({
        message: 'Something is Missing',
        success: false
      })



    }
    
    const user = await User.findOne({ email })
    console.log(user)
    if (user) {
      return res.status(400).json({
        message: 'User is already exist with this Email',
        success: false
      })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    await User.create({
      fullName,
       password: hashPassword, 
       email,
        phoneNumber, 
        role
    })

    return res.status(201).json({
      message: 'Account created succesfully',
      success: true
    })

  } catch (error) {
       console.log(error)
  }
}


export const login = async (req, res) => {
  try {
    const { email,  password, role } = req.body
    if (!password || !email  || !role) {
      return res.status(400).json({
        message: 'Something is Missing',
        success: false
      })
    }

    let user = await User.findOne({ email })
    // console.log(user)

    if (!user) {
      res.status(400).json({
        message: "email is not found on DataBase",
        success: false
      })
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)
    if (!isPasswordMatched) {
      res.status(400).json({
        message: 'Please Enter right Password',
        success: false
      })
    }

    //check role is correct or not
    if (role !== user.role) {
      res.status(400).json({
        message: 'Account does not exist with this role',
        success: false
      })
    }
    

    const tokenData = {
      userId: user._id
    }

    const token = jwt.sign(tokenData, process.env.SECRET_KEY)

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile
  }

    return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
      message: `WelCome Back ${user.fullName}`,
      success:true
    })

  } catch (error) {
    console.log(error)
  }

}

export const logout =async(req,res)=>{
  try{

     return res.status(200).cookie("token","").json({
      message:'logout succesfully ',
      success:true
     })
  }catch(error){
    console.log(error)
  }
}

export const updateProfile =async(req,res)=>{
  try{
     const {fullName,email,phoneNumber,bio,skills}=req.body
     const file=req.file
    

//cloudinary  
    let skillsArray
    if(skills){
       skillsArray=skills.split(",")
    }
    
    const userId=req.id //? is also ,while authenticate 
    console.log(userId);

    let user=await User.findById(userId)
    
    if(!user){
      res.status(400).json({
        message: 'user not exist',
        success: false
      })

    }
//updating data
if(fullName) user.fullName=fullName
    if(email) user.email=email

if(phoneNumber) user.phoneNumber=phoneNumber

if(bio)  user.profile.bio=bio
    
 if(skills)  user.profile.skills=skillsArray
   
    

    await user.save() //after updating i will save user new data

    //after updating user data we will return new data so that 
     user={
      _id:user._id,
      fullName:user.fullName,
      email:user.email,
      phoneNumber:user.phoneNumber,
      role:user.role,
      profile:user.profile
     }
     return res.status(200).json({
      message:'your profile has been Updated Succesfully',
      user,
      success:true
     })

  }catch(error){
          console.log(error)
  }
}