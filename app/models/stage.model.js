const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const StageSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'Stage name is required'
  },
  description: {
    type: String,
    required: 'Stage description is required'
  }
});

StageSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('Stage', StageSchema);
