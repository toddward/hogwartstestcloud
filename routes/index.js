var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  // Get the object passed in...read the specifics.
  var request = req.body;

  if (req.body.bravery >= 8) {
    request.house = 'gryffendor';
  } else if (req.body.cunning >= 8) {
    request.house = 'slytherin';
  } else if (req.body.loyalty >= 8) {
    request.house = 'hufflepuff';
  } else if (req.body.wit >= 8) {
    request.house = 'ravenclaw'
  }

  return res.status(200).json(request);
  next();
});

module.exports = router;
