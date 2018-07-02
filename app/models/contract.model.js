const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const ContractSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'Contract name is required'
  },
  content: {
    type: String,
    required: 'Contract content is required'
  },
  stage: {
    //'SIGN_PENDING', 'REVIEW_PENDING', 'NEGOTIATION', 'EXECUTED'
    type: String,
    default: 'SIGN_PENDING'
  },
  owner_id: {
    type: String,
    required: 'Owner Id is required'
  },
  client_id: {
    type: String,
    required: 'Client Id is required'
  },
  reviewer_id: {
    type: String,
    required: 'Reviewer Id is required'
  },
  executor_id: {
    type: String,
    required: 'Executor Id is required'
  },
  signed_at: {
    type: Date,
    default: null
  },
  approved_by: {
    type: String,
    default: null
  },
  approved_at: {
    type: Date,
    default: null
  },
  executed_by: {
    type: String,
    default: null
  },
  executed_at: {
    type: Date,
    default: null
  }
});

ContractSchema.plugin(timestamps);
ContractSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('Contract', ContractSchema);
