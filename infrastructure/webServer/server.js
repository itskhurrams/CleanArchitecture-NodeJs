'use strict';

const express = require('express');
const { scopePerRequest } = require('awilix-express');
const diContainer = require('../diContainer/dependancyContainer');
const userRoutes = require('../../api/routes/userRoutes');
const environment = require('../../infrastructure/config/environment');

module.exports = class Server {
  constructor() {
    _app = null;
    _PORT = 0;
    _URL = '';
  }
  static createServer = async () => {
    this._app = express();
    this._PORT = environment.PORT;
    this._URL = environment.URL;
    this._app.use(express.json());
    this._app.use(scopePerRequest(diContainer));
    this._app.get(
      '/users',
      diContainer.resolve('userAccountController').getUsers
    );

    //this._app.use(userRoutes);
  };
  static startServer = async () => {
    let server = await this._app.listen(this._PORT, async () =>
      console.log(`listening on ${this._URL}:${this._PORT}`)
    );
    return server;
  };
};
