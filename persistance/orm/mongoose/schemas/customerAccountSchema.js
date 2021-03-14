'user strict';

const mongoose = require('../mongooseConfiguration');
const Schema = mongoose.Schema;

const customerAccountSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  passCode: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedBy: {
    type: String,
    required: true,
  },
  updatedDate: {
    type: Date,
    required: true,
    default: Date.now,
  }
});
module.exports = mongoose.model('customerAccount', customerAccountSchema);
