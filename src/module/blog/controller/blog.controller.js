import blogModel from "../../../../DB/model/blog.model.js";
import userModel from "../../../../DB/model/user.model.js";

export const addBlog = async (req,res)=>{
    try {
        const {title,description,userId}= req.body;
        const user = await userModel.findById(userId);
        if(!user){
            return res.json({message:'user not found'})
        }
        const blog = await blogModel.create({title,description,userId});
    return res.json({message:"success", blog})
    } catch (error) {
        return res.json({message:'u found',error})
    }
}

export const getBlogs = async (req, res)=>{
    const blogs=await blogModel.find().populate({
        path:'userId',
        select:'-_id -password'
    });
    return res.json({message:"success",blogs});
}