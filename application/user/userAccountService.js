'use strict';
const userAccountService = require('../Interfaces/userAccountService');

module.exports = class extends userAccountService {
  constructor(_userAccountRepository) {
    super();
    this.userAccountRepository = _userAccountRepository;
  }
  async getUsers() {
    return await this.userAccountRepository.getUsers();
  }
  async getById(userId) {
    return await this.userAccountRepository.getById(userId);
  }
  async getByEmail(email) {
    return await this.userAccountRepository.getByEmail(email);
  }
  async saveUser(userAccount) {
    await this.userAccountRepository.save(userAccount);
  }
  async login(userName, password) {
    return await this.userAccountRepository.login(userName, password);
  }
  async checkAvailability(userName) {
    return await this.userAccountRepository.checkAvailability(userName);
  }
  async deleteUser(userId) {
    return await this.userAccountRepository.deleteUser(userId);
  }
};
