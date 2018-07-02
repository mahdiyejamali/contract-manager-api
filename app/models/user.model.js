const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const UserSchema = mongoose.Schema({
  name:  String,
  email:  String
});

UserSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('User', UserSchema);
