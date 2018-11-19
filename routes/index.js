var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    navigation: {start: 21, count: 20, total: 60, isFirstPage: true, isLastPage: false},
  	previousPage: {pageUrl: "http://locahost:3000/?pageNumber=1", linkText: "Previous"},
  	pages: [
  		{pageUrl: "http://locahost:3000/?pageNumber=1", linkText: 1},
  		{pageUrl: "http://locahost:3000/?pageNumber=2", linkText: 2, isCurrentPage: true},
  		{pageUrl: "http://locahost:3000/?pageNumber=3", linkText: 3},
  		{pageUrl: "http://locahost:3000/?pageNumber=4", linkText: 4},
  		{pageUrl: "http://locahost:3000/?pageNumber=5", linkText: 5},
	],
	nextPage: {pageUrl: "http://locahost:3000/?pageNumber=1", linkText: "Next"},
  });
});

router.get('/previousPage', function(req, res, next) {
  var response = [
    {navigation: {start: 1, count: 20, total: 60, isFirstPage: true, isLastPage: false}}
  ];
  return res.send(response);
});

router.get('/posts', function(req, res, next) {
  var response = [
    {cardNumber: Math.floor(Math.random() * 100)},
    {cardNumber: Math.floor(Math.random() * 100)},
    {cardNumber: Math.floor(Math.random() * 100)},
    {cardNumber: Math.floor(Math.random() * 100)},
    {cardNumber: Math.floor(Math.random() * 100)}
  ];
  return res.send(response);
});

module.exports = router;
