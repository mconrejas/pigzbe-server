const dotenv = require("dotenv");

// Read environment variables from the `.env` file.
dotenv.config();

// Expose consolidated environment variables.
module.exports = {
    API_BASE_URL: process.env.API_BASE_URL,
    API_VERSION: process.env.API_VERSION,
    API_ENV: process.env.API_ENV,
    WALLET_ADDRESS: process.env.WALLET_ADDRESS,
    WALLET_ID: process.env.WALLET_ID,
    WALLET_SECRET: process.env.WALLET_SECRET
};