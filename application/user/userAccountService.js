'use strict';
const userAccountService = require('../Interfaces/userAccountService');

module.exports = class extends userAccountService {
  _userAccountRepository;
  constructor(userAccountRepository) {
    super();
    this._userAccountRepository = userAccountRepository;
  }
  async getUsers() {
    return await _userAccountRepository.getById();
  }
  async getById(userId) {
    return await this._userAccountRepository.getById(userId);
  }
  async getByEmail(email) {
    return await this._userAccountRepository.getByEmail(email);
  }
  async saveUser(userAccount) {
    await this._userAccountRepository.save(userAccount);
  }
  async login(userName, password) {
    return await this._userAccountRepository.login(userName, password);
  }
  async checkAvailability(userName) {
    return await this._userAccountRepository.checkAvailability(userName);
  }
  async deleteUser(userId) {
    return await this._userAccountRepository.deleteUser(userId);
  }
};
