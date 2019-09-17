const dotenv = require("dotenv");

// Read environment variables from the `.env` file.
dotenv.config();

// Expose consolidated environment variables.
module.exports = {
    API_BASE_URL: process.env.API_BASE_URL,
    API_VERSION: process.env.API_VERSION,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET
};