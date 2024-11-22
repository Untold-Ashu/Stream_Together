import User from '../models/users.js';
import bcryptjs from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import generateTokenAndSetCookies from '../Utils/GenerateTokens.js';

export const signup = async (req,res)=>{
    try{

        const {name,username,password,confirmPassword,gender,email}=req.body;

        const user = await User.findOne({username});

        if(password!==confirmPassword){
            return res.status(400).json({error:"password doesn't match!"});
        }
    
        if(user){
            return res.status(400).json({error:"User already Exist!"});
        }

        //HASH THE PASSWORD HERE

    const salt= await bcryptjs.genSalt(10);
    const HashedPassword= await bcryptjs.hash(password,salt);
    //CREATE A NEW USER
    const newUser= new User({
        userId: uuidv4(),
        name:name,
        gender:gender,
        username:username,
        password:HashedPassword,
        email:email,

    });

    if(newUser){

        //generate JWT

        // await generateTokenAndSetCookies(newUser._id,res);
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            username:newUser.username,
            email:newUser.email,
            gender:newUser.gender,
        })
    }

    }
    catch (error) {

        console.log("error in signup controller",error.message);
        
        res.status(500).json({error:"internal server error"});
    }
};


export const  login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
  
      const isPasswordCorrect = await bcryptjs.compare(password, user.password || "");
  
      if (!isPasswordCorrect) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      await generateTokenAndSetCookies(user._id,res);
      
      return res.status(200).json({ message: "Login successful"});
      // Login successful, generate JWT or perform other actions
    } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
export const logout = async (req, res) => {
    try {
      res.clearCookie("jwt");
      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.error("Error during logout:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }




  // generating the token while signup but it should be done in the login controller