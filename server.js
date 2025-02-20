const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("welcome")
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});