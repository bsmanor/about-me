var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.append("Content-Security-Policy", "default-src 'self'");
  res.render('index', { title: 'Express' });
});

module.exports = router;
