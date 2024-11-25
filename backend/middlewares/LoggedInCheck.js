import jwt from "jsonwebtoken";
import User from "../models/users.js";

const LoggedInCheck = async (req, res, next) => {
  try {
    // Extract token from headers or cookies
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "Please log in to access this resource" });
    }

    // Verify the token
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }

      // Ensure the user exists in the database
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Attach userId to request for further use
      req.user = decoded.userId;
      next();
    });
  } catch (error) {
    console.error("Error in LoggedInCheck middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default LoggedInCheck;
