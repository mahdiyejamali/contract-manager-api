const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const ContractSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'Contract name is required'
  },
  entity_name: {
    type: String,
    required: 'Entity name is required'
  },
  mailing_address: {
    type: String,
    required: 'Mailing Address is required'
  },
  primary_contact_name: {
    type: String,
    required: 'Primary Contract name is required'
  },
  primary_contact_title: {
    type: String,
    required: 'Primary Contract Title is required'
  },
  primary_contact_phone: {
    type: String,
    required: 'Primary Contract Phone is required'
  },
  primary_contact_email: {
    type: String,
    required: 'Primary Contract Email is required'
  },
  billing_contact: {
    type: String,
    required: 'Billing Contract is required'
  },
  billing_phone: {
    type: String,
    required: 'Billing Phone is required'
  },
  billing_email: {
    type: String,
    required: 'Billing Email is required'
  },
  services: {
    type: String,
    required: 'Services is required'
  },
  valuation_period: {
    type: String,
    required: 'Valuation Period is required'
  },
  total_fee: {
    type: String,
    required: 'Total Fee is required'
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
