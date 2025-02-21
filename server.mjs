import express from 'express'
import dotenv from 'dotenv'  // call your port here

// Initialize express app
const app = express(); // instance of exptess
const PORT = process.env.PORT || 3000;
dotenv.config(); // call the dotenv

app.get("/", (req, res) => {
    res.send("welcome to Home page");
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});