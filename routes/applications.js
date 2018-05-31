const express = require('express');
const router = express.Router();
const Application = require('../dbModels/application.js');
const adminsList = require('../config/adminsList.js');


router.post('/list', function(req, res, next) {
	let searchFilter = {
		username: req.body.username
	}
	adminsList.forEach(admin => {
		if (req.body.username === admin) {
			searchFilter = {};
		}
	});

  Application.find(searchFilter, (err, applicationsList) => {

    if (err) return next(err);
    if (applicationsList) {     
      res.json({ 
      	success: true,
      	applicationsList: applicationsList
      })
    } else {
      return
    }
  })
});

router.post('/add', function(req, res, next) {
	
	const newApplication = new Application({
		username: req.body.username,
	  title: req.body.title,
	  text: req.body.text,
	  date: new Date().toDateString()
	})

  Application.create(newApplication, (err) => {

    if (err) {
    	next(err);
      res.json({ success: false });
      return
    }
    res.json({ success: true })
    return 
  })
});

module.exports = router;