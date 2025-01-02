import express from "express";
import {createRoom,getRoom} from "../controllers/rooms.controller.js";
import LoggedInCheck from "../middlewares/LoggedInCheck.js";
const router = express.Router();

router.get("/",LoggedInCheck,getRoom);
router.get("/:id",LoggedInCheck, getRoom);
router.post("/createRooms",LoggedInCheck,createRoom);
// router.put("/:id",LoggedInCheck, updateRoom);
// router.delete("/:id",LoggedInCheck, deleteRoom);

export default router;
//import {createRoom, getRooms, getRoom, updateRoom, deleteRoom} from "../controllers/rooms.controller.js";