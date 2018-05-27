const mongoose = require('mongoose');
const dbConfig = require('./dbConfig.js');


function setUpConnection() {
  mongoose.connect(dbConfig.url);
  console.log('Successfully connected to database!')
}


module.exports.setUpConnection = setUpConnection;