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
  status: {
    //'SIGN_PENDING', 'REVIEW_PENDING', 'NEGOTIATION', 'EXECUTED'
    type: String,
    required: 'Contract status is required'
  },
  owner_id: {
    type: Number,
    required: 'Owner Id is required'
  },
  client_id: {
    type: Number,
    required: 'Client Id is required'
  },
  reviewer_id: {
    type: Number,
    required: 'Reviewer Id is required'
  },
  executor_id: {
    type: Number,
    required: 'Executor Id is required'
  },
  signed_at: {
    type: Date,
    default: null
  },
  approved_by: {
    type: Number,
    default: null
  },
  approved_at: {
    type: Date,
    default: null
  },
  executed_by: {
    type: Number,
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
