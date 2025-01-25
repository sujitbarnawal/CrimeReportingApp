import jwt from 'jsonwebtoken'

const authMiddleware=async(req,res,next)=>{
    const token = req.headers.token
    
    if(!token){
        return res.json({success:false,message:'You are not authorized'})
    }
    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.userId=decoded.userId        
        next()
    } catch (error) {
        return res.json({success:false,message:error.message})      
    }
}

export default authMiddleware