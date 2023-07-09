import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        default:'Male',
        enum:['Male','Female']
    },
    ConfrimEmail:{
        type:Boolean,
        default:false
    },
    salary:Number,
    age:Number
},{
    timestamps:true
});

const userModel=model('User',userSchema);

export default userModel;