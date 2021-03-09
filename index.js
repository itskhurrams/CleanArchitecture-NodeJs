'use strict';

//const bootstrap = require('./lib/infrastructure/config/bootstrap');
const environment = require('./Infrastructure/Config/environment');
const SERVER = require('./Infrastructure/WebServer/server');

// Start the server
const start = async () => {
  try {
    //await bootstrap.init();
    await SERVER.createServer(environment.PORT, environment.URL);
    await SERVER.startServer();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
