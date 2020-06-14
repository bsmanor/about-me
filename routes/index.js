var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.cookies.username);
  res.append("Content-Security-Policy", "script-src 'self' 'unsafe-inline' https://code.jquery.com;");
  res.render('index', { title: 'Express' });
});

module.exports = router;
