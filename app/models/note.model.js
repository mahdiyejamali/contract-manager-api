const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const NoteSchema = mongoose.Schema({
  contractId: {
    type: String,
    required: 'Contract Id is required'
  },
  sectionId: {
    type: String,
    required: 'Section Id is required'
  },
  note: {
    type: String,
    required: 'Note is required'
  }
});

NoteSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('Note', NoteSchema);
