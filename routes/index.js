var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	var blog = fs.readFileSync('./blogs/blog.txt');
  res.render('index', { blog: blog});
});

module.exports = router;
