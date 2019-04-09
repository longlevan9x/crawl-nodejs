const mysql = require("mysql")
let config = require('../config')

const pool = mysql.createPool({
    host: config.MYSQL_CONFIG.host,
    user: config.MYSQL_CONFIG.user,
    password: config.MYSQL_CONFIG.password,
    database: config.MYSQL_CONFIG.database,
    connectionLimit: 2, // Default value is 10.
    waitForConnections: true, // Default value.
    queueLimit: 0 // Unlimited - default value.
})

module.exports = pool;