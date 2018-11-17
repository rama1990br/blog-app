var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	var blog = fs.readFileSync('./blogs/blog.txt');
	var products = [
		{
			"id": 1,
			"src": "./public/images/carousel-1.jpg",
			"alt": "product 1",
		},

		{
			"id": 2,
			"src": "./public/images/carousel-2.jpg",
			"alt": "product 2",
		},

		{
			"id": 3,
			"src": "./public/images/carousel-3.jpg",
			"alt": "product 3",
		},

		{
			"id": 4,
			"src": "./public/images/carousel-4.jpg",
			"alt": "product 4",
		},
	];
  res.render('index', { blog: blog, start: 1, count: 20, total: 2571, products: products});


});


module.exports = router;
