//Imports
import express from 'express'
import dotenv from 'dotenv'  // call your port here
import connectDB from './config/db.mjs'
import productsRoutes from './routes/productsRoutes.mjs';
import photoRouter from './routes/photoRouter.mjs';
import cors from 'cors';

//Setup - Initialize express app
const app = express(); // instance of express
const PORT = process.env.PORT || 3001;
dotenv.config(); // call the dotenv

// DB Connection
connectDB();

//Message display in the Browser
app.get("/", (req, res) => {
    res.send("Welcome. Server is Running...");
})

//Middleware
app.use(express.json())
app.use(cors());  // Enable CORS for all routes

//Routes
app.use('/products', productsRoutes)
app.use('/photo', photoRouter)

//Listener - Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});