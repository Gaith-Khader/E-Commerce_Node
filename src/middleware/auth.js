import jwt from 'jsonwebtoken';
import { verifyToken } from '../services/GenerateAndVerify.js';

const auth = (req,res,next)=>{
    // // Get token from headers
    // const {token}=req.headers;
    // // Check if token correct
    // if(!token){
    //     return res.json({message:"token required"});
    // }
    // // verify token
    // const decoded = jwt.verify(token,process.env.SIGNATURE);
    // req.id=decoded.id;
    // next();

    const {authorization} = req.headers
    if(!authorization?.startsWith(process.env.BEARER_TOKEN)){
        return res.json({message:"authorization required"});
    }
    const token = authorization.split(process.env.BEARER_TOKEN)[1];
    if(!token){
        return res.json({message:"token required"});
    }
    const decoded = verifyToken(token,process.env.SIGNATURE)
    req.id=decoded.id;
    next();
}
export default auth;