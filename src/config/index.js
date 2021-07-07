// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3030;

const envFound = require('dotenv').config();
if (envFound.error) {
    throw new Error("Couldn't find .env file");
}

const config = {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
    kafka: require('./kafka')
}

module.exports = config