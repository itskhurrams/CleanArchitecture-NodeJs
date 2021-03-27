'use strict';
const dotenv = require('dotenv');
module.exports = class Environment {
  constructor() {
    dotenv.config();
  }
  static PORT = process.env.PORT || 9000;
  static URL = process.env.URL || 'http://localhost';
  static DATABASE_URI = process.env.DATABASE_URI || '';
  static DATABASE_DIALECT = process.env.DATABASE_URI || '';
};
