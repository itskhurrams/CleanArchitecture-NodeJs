'use strict';
const UserAccountRepositoryInterface = require('../../../domain/user/userAccountRepositoryInterface');

module.exports = class UserAccountRepository {
  constructor(dbConfig) {
    //super();
    this.mongooseUserSchema = dbConfig.userAccountSchema;
  }
  async getUsers() {
    return await this.mongooseUserSchema.find();
  }
  async getById(userId) {
    return await this.mongooseUserSchema.findById(userId);
  }
  async getByEmail(email) {
    return await this.mongooseUserSchema.findOne({ email: email });
  }
  async saveUser(userAccount) {
    const schemaUser = new MongooseUserAccount(userAccount);
    await schemaUser.save();
  }
  async login(userName, password) {
    return await this.mongooseUserSchema.findOne({
      userName: userName,
      passCode: password,
    });
  }
  async checkAvailability(userName) {
    return await this.mongooseUserSchema.findOne({ userName: userName });
  }
  async deleteUser(userId) {
    return await this.mongooseUserSchema.findByIdAndRemove(userId);
  }
};
