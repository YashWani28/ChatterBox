const express = require('express')
const connectDB = require("./db/connectDb");
const dotenv = require("dotenv");
const cors=require('cors');
const cookieParser=require('cookie-parser')
dotenv.config();
const authRoutes = require("./routes/authRoutes"); 
const messageRoutes = require("./routes/messageRoutes"); 
const userRoutes = require("./routes/userRoutes"); 



const app = express();
const PORT = process.env.PORT || 5000

app.use(cors({
    origin:"http://127.0.0.1:3000",
    methods:["GET","POST","PUT","PATCH","DELETE"]
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running on port ${PORT}`)});
