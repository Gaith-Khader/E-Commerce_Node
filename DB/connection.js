import mongoose from 'mongoose';

const connectDB = async()=>{
    return await mongoose.connect(process.env.DB_LOCAL)
    .then(result =>{
        console.log("connection established");
    }).catch(err =>{
        console.log(`error:${err}`);
    }
)}

export default connectDB;