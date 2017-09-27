var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });

// var dbstring = '';

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   dbstring = 'Connected to database.'
//   console.log('Connected to database.');
// });

// router.get('/check-db',(req, res, next) => {
//   const ret = process.env.RDS_HOSTNAME + dbstring;
//   res.send(dbstring);

// })

// connection.end();

module.exports = router;