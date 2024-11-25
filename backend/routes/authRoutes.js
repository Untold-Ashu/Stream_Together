import express from "express";
import {signup,login, logout,UpdateUser} from "../controllers/auth.controller.js";
import LoggedInCheck from "../middlewares/LoggedInCheck.js";
// import {makeRooms} from "../controllers/rooms.controller.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login", login);
router.get("/logout:id", LoggedInCheck,logout);
router.put("/update:id", LoggedInCheck,UpdateUser);

export default router;