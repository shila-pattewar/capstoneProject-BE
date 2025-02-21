//Imports
import express from 'express'
import dotenv from 'dotenv'  // call your port here
import connectDB from './config/db.mjs'
import productsRoutes from './routes/productsRoutes.mjs';

//Setup - Initialize express app
const app = express(); // instance of express
const PORT = process.env.PORT || 3001;
dotenv.config(); // call the dotenv

// DB Connection
connectDB();

//Middleware
app.use(express.json())

//Routes
app.use('/products', productsRoutes)

//Listener - Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});