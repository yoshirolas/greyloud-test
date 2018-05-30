const mongoose = require('mongoose');
const dbConfig = require('./dbConfig.js');


function setUpConnection() {
  mongoose.connect(dbConfig.url);
  console.log('Successfully connected to database!');
  mongoose.connection.on("error", console.error)
	mongoose.connection.on("disconnected", setUpConnection)
}


module.exports.setUpConnection = setUpConnection;