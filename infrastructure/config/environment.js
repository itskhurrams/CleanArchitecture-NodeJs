'use strict';
const CONSTANTS = require('./constants');
const dotenv = require('dotenv');

module.exports = (() => {
  dotenv.config();
  const environment = {
    PORT: process.env.PORT || 9000,
    URL: process.env.URL || 'http://localhost',
    database: {
      dialect: process.env.DATABASE_DIALECT, //|| CONSTANTS.SUPPORTED_DATABASE.MONGO,
      url: process.env.DATABASE_URI || '',
    },
  };
  return environment;
})();
