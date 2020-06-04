/* 로컬에서 돌릴때는 dotenv = require('dotenv') */
const mysql = require('promise-mysql');
let dotenv = require('heroku-dotenv');
//dotenv.config();  // 로컬에서 돌릴떄는 이 주석 제거
const dbConfig = {
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    dateString:'date'
}

module.exports = mysql.createPool(dbConfig);