var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET drum kit */
router.get('/drumkit', function(req, res, next) {
  res.render('drumkit', { title: 'Express' });
});

module.exports = router;
