const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const ContractSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'Contract name is required'
  },
  start_date: {
    type: String,
    required: 'Start Date is required'
  },
  end_date: {
    type: String,
    required: 'End Date is required'
  },
  total_fee: {
    type: String,
    required: 'Total Fee is required'
  },
  stage: {
    //'SIGN_PENDING', 'REVIEW_PENDING', 'NEGOTIATION', 'EXECUTED'
    type: String,
    default: 'PENDING_CLIENT_SIGN'
  },
  owner_id: {
    type: String,
    required: 'Owner Id is required'
  },
  client_id: {
    type: String,
    required: 'Client Id is required'
  },
  executor_id: {
    type: String,
    required: 'Executor Id is required'
  },
  deliverables: {
    type: String,
    required: 'Deliverables is required'
  },
  entity_name: {
    type: String,
    default: null
  },
  mailing_address: {
    type: String,
    default: null
  },
  contact_name: {
    type: String,
    default: null
  },
  contact_title: {
    type: String,
    default: null
  },
  contact_phone: {
    type: String,
    default: null
  },
  contact_email: {
    type: String,
    default: null
  },
  billing_contact: {
    type: String,
    default: null
  },
  billing_phone: {
    type: String,
    default: null
  },
  billing_email: {
    type: String,
    default: null
  },
  signed_by: {
    type: String,
    default: null
  },
  client_printed_name: {
    type: String,
    default: null
  },
  client_title: {
    type: String,
    default: null
  },
  signed_at: {
    type: Date,
    default: null
  },
  executed_by: {
    type: String,
    default: null
  },
  executor_printed_name: {
    type: String,
    default: null
  },
  executor_title: {
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
