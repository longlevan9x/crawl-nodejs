const mysql = require("../connection/mysql");

exports.findAll = function (callback) {
    let sql_course = "SELECT * FROM courses where is_active = 1";
    mysql.query(sql_course, callback);
}