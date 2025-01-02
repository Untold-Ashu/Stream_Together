import Room from '../models/rooms.js';
import User from '../models/users.js';
import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createRoom = async (req, res) => {
    try {
        
        const { roomName, roomPassword } = req.body;
        const token = req.cookies.jwt;// get the token from the request headers

        const decoded = jwt.verify(token, process.env.SECRET_KEY);// verify the token
        
        const hostId = decoded.userId;// get the user ID from the token
       
        if (user.roomsCreated && user.roomsCreated.length > 0) {
            return res.status(400).json({
                error: 'You can only create one room at a time. Please delete your existing room to create a new one.'
            });
        }
         const roomId = uuidv4();// generate a unique room ID and store in database for easy retrieval of created rooms
         const user = await User.findById(hostId);// find the user in the database
         user.roomsCreated.push(roomId);// add the room name to the user's roomsCreated array

       
        const hashedPassword = await bcryptjs.hash(roomPassword, 12);// hash the password for security

        const newRoom = new Room({ roomId, roomName, roomPassword: hashedPassword, hostId });
        await newRoom.save();
        res.status(201).json({ roomId,roomName, message: 'Room created successfully' });
        //don't send the hashed password back to the client 
        //send the room ID and room name back to the client only
        //the client can use the room ID to join the room


    } catch (error) {
        console.error('Error in createRoom controller:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }

};

export const getRoom = async (req, res) => {
    try {
        const token = req.cookies.jwt;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decoded.userId;
        const id = req.params.id;
        if(!id){
            const rooms = await Rooms.find();
            return res.status(200).json(rooms);
        }else{
            const rooms = await User.findById(id);
            return res.status(200).json(rooms);
        }
        
    } catch (error) {
        console.error('Error in getRooms controller:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}// get this room from the database and send it back to the client