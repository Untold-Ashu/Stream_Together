import User from '../models/users.js';
import bcryptjs from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import generateTokenAndSetCookies from '../Utils/GenerateTokens.js';

//signup
export const signup = async (req, res) => {
  try {
    const { name, username, password, confirmPassword, gender, email } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match!" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUser = new User({
      userId: uuidv4(),
      name,
      gender,
      username,
      password: hashedPassword,
      email,
    });

    // Save the user
    await newUser.save();

    // Return success response
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      gender: newUser.gender,
    });
  } catch (error) {
    console.error("Error in signup controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
//login
export const login = async (req, res) => {
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

    // Generate and set JWT in cookies
    generateTokenAndSetCookies(user._id, res);

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
//logout
export const logout = async (req, res) => {
  try {
       res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
//Update Users 
export const UpdateUser = async (req, res) => {
  const { id } = req.params
const body= req.body;
try{
    const user= await User.findByIdAndUpdate(id, body, {new:true});//{new:true}By default, findOneAndUpdate() returns the document as it was before update was applied. If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
    if(!user){
        return res.status(404).json({error:"User not found"});
    }
    return res.status(200).json(user);
}
catch(error){
  res.status(500).json({error:"internal server error", message:error.message});
}

};