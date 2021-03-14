'use strict';
const userAccountRepository = require('../../../domain/user/userAccountRepository');
const MongooseUserAccount = require('../../orm/mongoose/schemas/userAccountSchema');

module.exports = class extends userAccountRepository {
  constructor() {
    super();
  }
  async getUsers() {
    return await MongooseUserAccount.find();
  }
  async getById(userId) {
    return await MongooseUserAccount.findById(userId);
  }
  async getByEmail(email) {
    return await MongooseUserAccount.findOne({ email: email });
  }
  async saveUser(userAccount) {
    const schemaUser = new MongooseUserAccount(userAccount);
    await schemaUser.save();
  }
  async login(userName, password) {
    return await MongooseUserAccount.findOne({
      userName: userName,
      passCode: password,
    });
  }
  async checkAvailability(userName) {
    return await MongooseUserAccount.findOne({ userName: userName });
  }
  async deleteUser(userId) {
    return await MongooseUserAccount.findByIdAndRemove(userId);
  }

  /*
  async persist(userEntity) {
    const { firstName, lastName, email, password } = userEntity;
    const mongooseUser = new MongooseUser({
      firstName,
      lastName,
      email,
      password,
    });
    await mongooseUser.save();
    return new User(
      mongooseUser.id,
      mongooseUser.firstName,
      mongooseUser.lastName,
      mongooseUser.email,
      mongooseUser.password
    );
  }

  async merge(userEntity) {
    const { id, firstName, lastName, email, password } = userEntity;
    const mongooseUser = MongooseUser.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      password,
    });
    return new User(
      mongooseUser.id,
      mongooseUser.firstName,
      mongooseUser.lastName,
      mongooseUser.email,
      mongooseUser.password
    );
  }

  async remove(userId) {
    return MongooseUser.findOneAndDelete(userId);
  }

  async get(userId) {
    const mongooseUser = await MongooseUser.findById(userId);
    return new User(
      mongooseUser.id,
      mongooseUser.firstName,
      mongooseUser.lastName,
      mongooseUser.email,
      mongooseUser.password
    );
  }

  async getByEmail(userEmail) {
    const mongooseUser = await MongooseUser.find({ email: userEmail });
    return new User(
      mongooseUser.id,
      mongooseUser.firstName,
      mongooseUser.lastName,
      mongooseUser.email,
      mongooseUser.password
    );
  }

  async find() {
    const mongooseUsers = await MongooseUser.find();
    return mongooseUsers.map((mongooseUser) => {
      return new User(
        mongooseUser.id,
        mongooseUser.firstName,
        mongooseUser.lastName,
        mongooseUser.email,
        mongooseUser.password
      );
    });
    }
 */
};
