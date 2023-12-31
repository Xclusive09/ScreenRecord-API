const express = require('express');
const router = express.Router();
const upload = require('../MiddleWare/uploadMiddleware');
const videoController = require('../Controllers/videoController');

// Create a new video
router.post('/videos', upload.single('videoFile'), videoController.createVideo);

// Get all videos
router.get('/videos', videoController.getAllVideos);

// Get a video by ID
router.get('/videos/:id', videoController.getVideoById);

module.exports = router;
