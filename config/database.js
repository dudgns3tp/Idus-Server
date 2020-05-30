const mysql = require('promise-mysql');
const dbConfig = {
    host:'db-our-sopt-default.cmvicyxzzfke.ap-northeast-2.rds.amazonaws.com',
    port:3306,
    user:'admin',
    password:'96439643',
    database:'idus',
    dateString:'date'
}

module.exports = mysql.createPool(dbConfig);