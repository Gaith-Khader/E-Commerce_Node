import connectDB from '../DB/connection.js'
import authRouter from './module/auth/auth.router.js'
import userRouter from './module/user/user.router.js'
import blogRouter from './module/blog/blog.router.js'
import cors from 'cors'

const initApp = (app,express)=>{
    connectDB();
    app.use(express.json());
    app.use(cors());
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    app.use('/blog',blogRouter);
    app.use('*',(req,res)=>{
        return res.json({message:"page not found"});
    })
}
export default initApp;