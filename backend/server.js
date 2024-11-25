import express  from 'express';
import cookieParser from "cookie-parser"
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import connectToMongoDB from './DB/connect.db.js';



const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT= process.env.PORT||5000;

dotenv.config();
//connect to DB
connectToMongoDB();
//home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
//routes for user
app.use('/api/users',authRoutes);


app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});