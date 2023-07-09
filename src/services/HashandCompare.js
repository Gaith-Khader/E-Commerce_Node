import bcrypt from 'bcryptjs';

export const hash = (plainText,saltRound=process.env.SALT_ROUND)=>{
    let hashValue= bcrypt.hashSync(plainText,parseInt(saltRound));
    return hashValue;
}

export const compare = (plainText,hashValue)=>{
    let match= bcrypt.compare(plainText,hashValue);
    return match;
}