'user strict';

const mongoose = require('../mongooseConfiguration');
const Schema = mongoose.Schema;

const customerServicesSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'customerAccount',
    required: true,
  },
  businessTypeId: {
    type: Schema.Types.ObjectId,
    ref: 'businessAccount',
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  serviceDescription: {
    type: String,
    required: true,
  },
  logoFileUrl: {
    type: String,
    required: true,
  },
  isDefault: {
    type: Boolean,
    required: true,
    default: true,
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
  },
});
module.exports = mongoose.model('customerService', customerServicesSchema);
