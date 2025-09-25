const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
    JWT_SECRET: process.env.JWT_SECRET,
    CORS_ORIGIN : process.env.CORS_ORIGIN || "http://localhost:3000,",
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000/api",
    FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL || 'http://localhost:3000',
};