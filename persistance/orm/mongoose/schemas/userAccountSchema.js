'user strict';

const mongoose = require('../mongooseConfiguration');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  passCode: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  cellNumber: {
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
  },
  userCustomerServiceList: {
    type: Array,
  },
});

//userSchema.loadClass(userAccount);

module.exports = mongoose.model('userAccount', userSchema);
