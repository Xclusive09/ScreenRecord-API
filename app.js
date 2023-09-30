const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const videoRoutes = require('./Routes/videoRoutes');

// dotenv.config();

const app = express();

mongoose.connect('mongodb+srv://Xclusive:Akolade1234@restapi.wstlbei.mongodb.net/videoDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Define a route prefix for video-related routes
app.use('/api', videoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

