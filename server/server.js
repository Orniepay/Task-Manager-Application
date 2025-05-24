const express = require('express');  // Web framework for Node.js
const cors = require('cors');    // Middleware to enable CORS
const dotenv = require('dotenv');    // Loads environment variables from .env files 

// Load environmental variables from .env file 
// Allows us to store sensitive info like database passwords outside our code 
dotenv.config();

// Create Express app instance (creating web server)
const app = express();

// Define port number (check .env port first and then default to 5000)
const PORT = process.env.PORT || 5000; 


/* MIDDLEWARE SETUP */
// Middleware functions run between receiving a request and sending a response

// 1. CORS Middleware - allows React frontend (running on port 3000) to make requests TO backend (running on port 5000)
app.use(cors({
    origin: 'https://localhost:3000',    // Allows requests from React sever 
    credentials: true                  // Allows cookies to be sent with requests
}));

// 2. JSON Parser Middleware - parses incoming requests with JSON payloads
app.use(express.json());

// 3. URL-encoded Parser Middleware - parses incoming requests that are URL encoded payloads (form data)
app.use(express.urlencoded({ extended: true }));


/* Basic Route Setup */
// Routes define what happens when someone makes a request to specific URLs 

// 1.  Root route - just to test if server is working
app.get('/', (req, res) => {
    res.json({
        message: 'Tasklify API is running!',
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

// 2. Health check route - useful for monitoring 
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),   // How long server has been running 
        timestamp:  new Date().toISOString()
    });
});

// 3. 404 handler for undefined routes 
// This middleware runs if no other routes match the request 
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Route not found',
        requestedURL: req.originalUrl
    });
}); 

// 4. Error Handling Middleware 
// Express error handling middleware has 4 parameters: (err, rq, res, next)
app.use((err, req, res, next) => {
    console.error('Error occurred: ', err.stack);

    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV == 'development' && { stack: err.stack })
    })
})


/* START THE SERVER */
// Starts the server and makes it listen for requests 
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
    console.log(`📱 Access the API at: http://localhost:${PORT}`)
    console.log(`🏥 Health check: http://localhost:${PORT}/api/health`)
});

// Shut down server 
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...')
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...')
    process.exit(0);
})