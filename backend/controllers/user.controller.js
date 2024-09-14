import  {User}  from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {

  try {


    const { fullName, password, email, phoneNumber, role } = req.body
    if (!fullName || !password || !email || !phoneNumber || !role) {
      return res.status(400).json({
        message: 'Something is Missing',
        success: false
      })



    }
    const user = await User.findOne({ email })
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
    const { email, phoneNumber, password } = req.body
    if (!password || !email || !phoneNumber) {
      return res.status(400).json({
        message: 'Something is Missing',
        success: false
      })
    }

    const user = await User.findOne({ email })

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

    return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
      message: `WelCome Back ${user.fullName}`,
      status: success
    })

  } catch (error) {
    console.log(error)
  }

}

export const logout =async(req,res)=>{
  try{

     return res.status(200).cookie("token","",{maxAge}).json({
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
     if (!fullName || !bio|| !email || !phoneNumber || !skills) {
      return res.status(400).json({
        message: 'Something is Missing',
        success: false
      })


//cloudinary  
    }
    const skillsArray=skills.split(",")
    const userId=req.id
    let user=await User.findById(userId)
    if(!user){
      res.status(400).json({
        message: 'user not exist',
        success: false
      })

    }
//updating data
    user.fullName=fullName,
    user.email=email,
    user.phoneNumber=phoneNumber,
    user.profile.bio=bio,
    user.profile.skills=skillsArray

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

  }
}