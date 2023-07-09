import userModel from '../../../../DB/model/user.model.js'
import bcrypt from 'bcryptjs';
// jwt import:
import jwt from 'jsonwebtoken';
// Hash and compare (H)
import { hash , compare} from '../../../services/HashandCompare.js'
import {generateToken} from '../../../services/GenerateAndVerify.js'
import { signupSchema } from '../auth.validation.js';



// Sign Up ============================================================
export const signup= async (req,res)=>{
    try{
        const {userName,email,password,cPassword,age,gender}= req.body;
        const validationResult= signupSchema.validate(req.body,{abortEarly:false})
        return res.json(validationResult);
        // H-1-A-hashing password
        let hashValue =  hash(password);
        // H-1-B-adding password to the database
        const newUser = new userModel({userName,email,password:hashValue,age,gender});
        const user = await newUser.save();
    
        return res.json({message:'success',user});
    }
    catch(err){
        console.log(err);
        return res.json({message:'error',err});
    }
}


// log in ============================================================
export const login = async (req,res) => {
    try{
        const {email,password}=req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({message:'user not found'});
        }
        // H-2-A-compare the password 
        let match = compare(password,user.password);
        // H-2-B-validation for the new password
        if (!match) {
            return res.json({message:'Password mismatch'});
        }
        // JWT-1-create token

        const token = generateToken({id:user._id,isLoggedIn:true})
        return res.json({message:'success',token});
    }
    catch(err){
        console.log(err);
        return res.json({message:"err",err})
    }
}