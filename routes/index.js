var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send('ok!!');
  /*If you pass in a number in send,
  it will automatically pick it as the HTML status of the app */
  // res.render('index', { title: 'Express' });
});

// The return value of the router earlier defined
module.exports = router;
