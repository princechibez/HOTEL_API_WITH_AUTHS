require('dotenv/config');

const DATABASE = {
    MONGO_URI: process.env.MONGO_URI
}

const SCHEMAS = {
    ROOM_SCHEMA: 'room',
    Room_Type: "roomtype"
}

module.exports = { DATABASE, SCHEMAS }