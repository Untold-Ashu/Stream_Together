import express from "express";
import generateTokenAndSetCookies from "../Utils/GenerateTokens";

const LogoutCheck = (req, res, next) => {
    // Extract the JWT token from the request headers or cookies
    const token = req.headers.authorization || req.cookies.jwt;
  
    if (!token) {
      return res.status(401).json({   
   error: 'Unauthorized' });
    }
  
    // Verify the token and extract the user ID
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
  
      req.user = decoded.userId;   
   // Set the user ID in the request object
      next();
    });
  };
  export default LogoutCheck;
