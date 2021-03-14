'user strict';

const mongoose = require('../mongooseConfiguration');
const Schema = mongoose.Schema;

const businessTypeSchema = new Schema({
  businessTypeTitle: {
    type: String,
    required: true,
  },
  businessTypeDescription: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model('businessType', businessTypeSchema);
