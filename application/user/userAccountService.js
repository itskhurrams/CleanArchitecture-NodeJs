'use strict';
const UserAccountServiceInterface = require('../Interfaces/userAccountServiceInterface');
//extends UserAccountServiceInterface
module.exports = class UserAccountService {
  constructor(Repositories) {
    this.userAccountRepository = Repositories.userAccountRepository;
  }
  getUsers = () => {
    return this.userAccountRepository.getUsers();
  };
  // async getById(userId) {
  //   return await this.userAccountRepository.getById(userId);
  // }
  // async getByEmail(email) {
  //   return await this.userAccountRepository.getByEmail(email);
  // }
  // async saveUser(userAccount) {
  //   await this.userAccountRepository.save(userAccount);
  // }
  // async login(userName, password) {
  //   return await this.userAccountRepository.login(userName, password);
  // }
  // async checkAvailability(userName) {
  //   return await this.userAccountRepository.checkAvailability(userName);
  // }
  // async deleteUser(userId) {
  //   return await this.userAccountRepository.deleteUser(userId);
  // }
};
