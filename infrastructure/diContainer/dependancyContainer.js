'use strict';

const { asClass, createContainer } = require('awilix');

const Environment = require('../config/environment');
const InitializeDatabase = require('../../persistance/config/initializeDatabase');
const UserAccountRepository = require('../../persistance/user/mongoose/userAccountRepository');
const UserAccountService = require('../../application/user/userAccountService');
const UserAccountController = require('../../api/controllers/user/userAccountController');
const UserAccountSchema = require('../../persistance/orm/mongoose/schemas/userAccountSchema');
const ConfigureDatabase = require('../../persistance/orm/mongoose/configureDatabase');

const container = createContainer();
container.register({
  environment: asClass(Environment).singleton(),
  userAccountController: asClass(UserAccountController).scoped(),
  userAccountService: asClass(UserAccountService).scoped(),
  userAccountRepository: asClass(UserAccountRepository).scoped(),
  configureDatabase: asClass(ConfigureDatabase).scoped(),
  initializeDatabase: asClass(InitializeDatabase).scoped(),
  userAccountSchema: asClass(UserAccountSchema).scoped(),
});

module.exports = container;
