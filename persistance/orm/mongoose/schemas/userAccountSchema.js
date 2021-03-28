'user strict';

module.exports = class UserAccountSchema {
  constructor(dbConfig) {
    this.mongoose = dbConfig.configureDatabase.getMongoose();
    const schemaOptions = {
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
      Boolean: { isActive: 'is_active' },
    };
    const userSchema = new this.mongoose.Schema(
      {
        userName: {
          type: String,
          required: true,
        },
        firstName: {
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
      },
      schemaOptions
    );
    return this.mongoose.model('user', userSchema);
  }
};
// const userSchema = new Schema({
//   userName: {
//     type: String,
//     required: true,
//   },
//   passCode: {
//     type: String,
//     required: true,
//   },
//   firstName: {
//     type: String,
//     required: true,
//   },
//   middleName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   dob: {
//     type: Date,
//     required: true,
//   },
//   cellNumber: {
//     type: String,
//     required: true,
//   },
//   isActive: {
//     type: Boolean,
//     required: true,
//     default: true,
//   },
//   createdBy: {
//     type: String,
//     required: true,
//   },
//   createdDate: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
//   updatedBy: {
//     type: String,
//     required: true,
//   },
//   updatedDate: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
//   userCustomerServiceList: {
//     type: Array,
//   },
// });
// module.exports = mongoose.model('userAccount', userSchema);
