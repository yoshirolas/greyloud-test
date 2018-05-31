const mongoose = require('mongoose');


const applicationSchema = new mongoose.Schema({
  username: { type: String },
  title: { type: String },
  text: { type: String },
  date: { type: String },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;