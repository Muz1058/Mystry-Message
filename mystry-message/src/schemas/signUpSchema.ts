import {z} from 'zod'
export const usernameValidadtion=z
.string()
.min(3,"Username must be atleast 3 characters")
.max(20,"Username must not be greater than 20 characters")
.regex(/^[a-zA-Z0-9]+$/,"username must not contain special characters");

export const signUpSchema=z.object({
    username:usernameValidadtion,
    email:z.string().email({message:'invalid email address'}),
    password:z.string().min(8,{message:'password must be atleast 8 characters'})
})