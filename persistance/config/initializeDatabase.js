require('dotenv').config();

const constants = require('../../Infrastructure/Config/constants');
const environment = require('../../Infrastructure/Config/environment');

module.exports = {
  async init() {
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
      require('../ORM/Mongoose/mongoose');
    }
    if (
      environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRE ||
      environment.database.dialect === constants.SUPPORTED_DATABASE.SQLITE
    ) {
      const sequelize = require('../ORM/Sequelize/sequelize');
      try {
        await sequelize.sync();
        console.log('Connection to DB has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    }
  },
};
