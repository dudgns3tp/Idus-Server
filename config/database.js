const mysql = require('promise-mysql');
let dotenv = require('heroku-dotenv');
dotenv.config();
const dbConfig = {
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    dateString:'date'
}

module.exports = mysql.createPool(dbConfig);