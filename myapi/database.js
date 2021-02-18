const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser',
  password: 'netpass',
  database: 'tvt20spl'
});
module.exports = connection;