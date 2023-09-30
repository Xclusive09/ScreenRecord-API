const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const videoRoutes = require('./Routes/videoRoutes');

// dotenv.config();

const app = express();

const uri = 'mongodb+srv://Xclusive:Akolade1234@restapi.wstlbei.mongodb.net/videoDB?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Other options if needed
});
// Check if the connection was successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(express.json());

// Define a route prefix for video-related routes
app.use('/api', videoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

