const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/*', function(req, res, next) {
  res.send("login");
});

module.exports = router;
