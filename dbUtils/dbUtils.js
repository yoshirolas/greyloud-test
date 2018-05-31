const mongoose = require('mongoose');
const dbConfig = require('./dbConfig.js');
const User = require('../dbModels/user.js');


function setUpConnection() {
  mongoose.connect(dbConfig.url);
  console.log('Successfully connected to database!');
  mongoose.connection.on("error", console.error)
	mongoose.connection.on("disconnected", setUpConnection)
}

// function addUser(data) {
//   console.log(data)
//   const newUser = new User({
//     username: data.username,
//     password: data.password,
//   });
//   return newUser.save();
// }


module.exports.setUpConnection = setUpConnection;
// module.exports.addUser = addUser;