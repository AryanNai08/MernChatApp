import { generateToken } from "../Lib/utils";
import User from "../models/User";
import bcrypt from "bcryptjs"

//signup a new user

export const signup = async (req, res) => {
    const { fullname, email, password, bio } = req.body;

    try {
        if (!fullname || !email || !password || !bio) {
            return res.json({ success: false, message: "Missing details" })
        }

        const user = await User.findOne({ email });

        if (User) {
            return res.json({ success: false, message: "Account already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({ fullname, email, password: hashedPassword, bio });

        const token= generateToken(newUser._id)

        res.json({success:true,userData:newUser,token,message:"Account created successfully"})
    } catch (error) {
        console.log(error.message)
    res.json({success:false,message:error.message})
    }
}



//controller to login a user

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const userData=await User.findOne({email})

        const isPasswordCorrect= await bcrypt.compare(password,userData.password);

        if(!isPasswordCorrect){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token= generateToken(userData._id)

        res.json({success:true,userData,token,message:"Login successfully"})
    }catch(error){
           console.log(error.message)
    res.json({success:false,message:error.message})
    }
}



// controller to check if user is authenticated
export const checkAuth=(req,res)=>{
    res.json({success:true,user:req.user});
    
}