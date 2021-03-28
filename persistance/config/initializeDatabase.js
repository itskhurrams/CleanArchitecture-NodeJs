require('dotenv').config();

const constants = require('../../infrastructure/config/constants');
const environment = require('../../infrastructure/config/environment');

module.exports = class InitializeDatabase {
  constructor(dbConfig) {
    this.configureDatabase = dbConfig.configureDatabase;
  }
  static initialize = async () => {
    if (environment.DATABASE_DIALECT === constants.SUPPORTED_DATABASE.MONGO) {
      this.configureDatabase.connectMongoose();
    }
    if (
      environment.DATABASE_DIALECT === constants.SUPPORTED_DATABASE.POSTGRE ||
      environment.DATABASE_DIALECT === constants.SUPPORTED_DATABASE.SQLITE
    ) {
      const sequelize = require('../orm/sequelize/sequelizeConfiguration');
      try {
        await sequelize.sync();
        console.log('Connection to DB has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    }
  };
};
