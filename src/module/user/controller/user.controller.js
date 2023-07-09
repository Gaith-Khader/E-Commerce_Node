import userModel from "../../../../DB/model/user.model.js";
import jwt from 'jsonwebtoken';

// Get Users =================================================================
export const getUsers = async (req,res)=>{
    try{
        const users=await userModel.find();
        return res.json({message:"success",users})
    }
    catch(err){
        return res.json({message:"error",err});
    }
}

// Update Users =================================================================
export const updateUser = async (req,res)=>{
    try{
        let id=req.id;
        const {age}=req.body;
        const user = await userModel.findByIdAndUpdate({_id:id},{age},{new:true});
        // validation
        if(user){
            return res.json({message:"success",user});
        }
            return res.json({message:"user not found"});
    }
    catch(err){
        console.log(err);
        return res.json({message:"error",err});
    }
}

// Delete Users =================================================================
export const deleteUser = async (req,res)=>{
    try{
        let id=req.id;
        const user = await userModel.findByIdAndDelete(id);
        if(user){
            return res.json({message:"success",user});
        }
        else{
            return res.json({message:"invalid ID",user});
        }
    }
    catch(err){
        console.log(err);
        return res.json({message:"error",err});
    }
}