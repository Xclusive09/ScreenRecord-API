# Screen Record API Documentation
- The Screen Record API allows you to manage screen recording videos. You can create new videos, retrieve a list of all videos, and get specific videos by their IDs.

## Base URL
- The base URL for all API endpoints is: https://your-api-base-url.com/api

## Authentication
- This API does not require authentication. It's open for public use.

## Endpoints
1. Create a New Video
- Endpoint: /videos
- Method: POST

### Request
- Content-Type: multipart/form-data
- Body Parameters:
- videoFile (File): The screen recording video file to upload.
- title (String, required): The title of the video.
- description (String): A description of the video.
- Example Request:

### http
POST https://your-api-base-url.com/api/videos
Content-Type: multipart/form-data

### Body:
- videoFile: [Upload your video file]
- title: "Sample Video"
- description: "A short description of the video"
### Response
- Status Code: 201 Created
- Body: JSON object representing the created video, including its unique id.
- Example Response:
```
json
{
  "id": "12345",
  "title": "Sample Video",
  "description": "A short description of the video",
  "videoUrl": "https://your-api-base-url.com/api/videos/12345"
}
```
2. Get All Videos
- Endpoint: /videos
- Method: GET

### Request
- Content-Type: application/json
- Example Request:

### http
```
https

GET https://your-api-base-url.com/api/videos
Content-Type: application/json
```
Response

- Status Code: 200 OK
- Body: JSON array containing a list of all videos.

### Example Response:

```

json
[
  {
    "id": "12345",
    "title": "Sample Video 1",
    "description": "A short description of the first video",
    "videoUrl": "https://your-api-base-url.com/api/videos/12345"
  },
  {
    "id": "67890",
    "title": "Sample Video 2",
    "description": "A short description of the second video",
    "videoUrl": "https://your-api-base-url.com/api/videos/67890"
  }
]
```

3. Get Video by ID
- Endpoint: /videos/:id
- Method: GET

### Request
- Content-Type: application/json
- Path Parameter:
- id (String, required): The unique ID of the video to retrieve.

### Example Request:

```
http
GET https://your-api-base-url.com/api/videos/12345
Content-Type: application/json
```

### Response
- Status Code: 200 OK
- Body: JSON object representing the video with the specified ID.

### Example Response:

```
json
{
  "id": "12345",
  "title": "Sample Video 1",
  "description": "A short description of the video",
  "videoUrl": "https://your-api-base-url.com/api/videos/12345"
}
```

## Error Handling
- If there's an issue with the request or server, you may receive a 500 Internal Server Error response with a corresponding error message in the response body.

## Notes
- Videos are stored and managed on the server.
- Video files can be uploaded as multipart/form-data.
- The API does not require authentication and is open for public use.
T




