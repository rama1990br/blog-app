var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    navigation: {start: 1, count: 20, total: 60, isFirstPage: true, isLastPage: false}
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
