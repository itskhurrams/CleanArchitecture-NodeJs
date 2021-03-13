'use strict';

const express = require('express');

module.exports = {
  _app: null,
  _PORT: 0,
  _URL: '',
  async createServer(PORT, URL) {
    this._app = express();
    this._app.use(express.json());
    this._PORT = PORT;
    this._URL = URL;
  },
  async startServer() {
    let server = await this._app.listen(this._PORT, async () =>
      console.log(`listening on ${this._URL}:${this._PORT}`)
    );
    return server;
  },
};

// const createServer = async () => {
//   const app = express();
//   app.use(express.json());
//   const Server = app.listen(enviroment.PORT, () =>
//     console.log(`listening on ${enviroment.URL}:${enviroment.PORT}`)
//   );
//   return Server;
// };
// module.exports = createServer;
// module.exports = createServer;
