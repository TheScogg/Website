var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET drum kit */
router.get('/drumkit', function(req, res, next) {
  res.render('drumkit', { title: 'Drum Kit' });
});

/* GET clock */
router.get('/clock', function(req, res, next) {
  res.render('clock', { title: 'Clock' });
});

router.get('/pictorama', function(req, res, next) {
  res.render('pictorama', { title: 'Pictorama'})
});

module.exports = router;
