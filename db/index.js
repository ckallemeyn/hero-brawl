const mysql = require('mysql');
const { database, password } = require('../config.js')

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password,
  database
});

// db.getConnection((err, connection) => {
//   if (err) {
//     console.error('unable to connect to db: ', err);
//   }
//   console.log('Found connection id:', connection.threadId);
// });

exports.db = db;