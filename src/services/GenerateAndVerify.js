import jwt from 'jsonwebtoken';

export const generateToken = (paylaod,signature=process.env.SIGNATURE,expiresIn='24h')=>{
    const token=jwt.sign(paylaod,signature,{expiresIn});
    return token;
}

export const verifyToken = (token,signature=process.env.SIGNATURE)=>{
    const decoded=jwt.verify(token,signature);
    return decoded;
}