//Imports
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// save mongoURI connection string to variable
const db = process.env.MONGODB_URI;

async function connectDB() {
    try {
        // mongoose.connect(db); // check the database connection
        await mongoose.connect(db);
        console.log('Mongo DB Connected...')
    } catch (err) {
        console.error(err)
        // process.exit(1)
    }
}
export default connectDB