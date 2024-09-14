import jwt from 'jsonwebtoken'

export const isAuthenticated=async(req,res,next)=>{
  
    try{

         const token=req.cookies.token
         if(!token){
            return res.status(401).json({
                message:'User not authenticat',
                success:false
            })
         }
         const decode= await jwt.verify(token,process.env.SECRET_KEY)
         if(!decode){
            res.status(400).json({
                message:'invalid token',
                success:false
            })
         }
         req.id=decode.userId
         next()

    }catch(error)
    {
        console.log(error)
        
    }

}