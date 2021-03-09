require('dotenv').config();

const constants = require('../../infrastructure/config/constants');
const environment = require('../../infrastructure/config/environment');

module.exports = {
  async initialize() {
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
      require('../orm/mongoose/mongooseConfiguration');
    }
    if (
      environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRE ||
      environment.database.dialect === constants.SUPPORTED_DATABASE.SQLITE
    ) {
      const sequelize = require('../orm/sequelize/sequelizeConfiguration');
      try {
        await sequelize.sync();
        console.log('Connection to DB has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    }
  },
};
