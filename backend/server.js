const express = require('express')
const connectDB = require("./db/connectDb");
const dotenv = require("dotenv");
const cookieParser=require('cookie-parser')
dotenv.config();
const authRoutes = require("./routes/authRoutes"); 
const messageRoutes = require("./routes/messageRoutes"); 


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running on port ${PORT}`)});
