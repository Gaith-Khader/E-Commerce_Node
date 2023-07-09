import joi from 'joi';

export const signupSchema=joi.object({
    userName:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().required(),
    cPassword:joi.valid(joi.ref('password')).required(),
    age:joi.number()
}).required();


