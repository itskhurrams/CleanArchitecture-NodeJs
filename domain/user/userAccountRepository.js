'use strict';

module.exports = class {
  getUsers() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  getById(userId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  getByEmail(email) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  saveUser(userAccount) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  login(userName, password) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  checkAvailability(username) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  deleteUser(userId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
};
