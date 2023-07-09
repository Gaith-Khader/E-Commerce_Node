import { Schema,Types, model } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
        type:Types.ObjectId,
        ref:'User',
        required:true
    }
},{
    timestamps:true
});
const blogModel=model('blog',blogSchema);
export default blogModel;