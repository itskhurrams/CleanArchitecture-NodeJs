'use strict';

const database = require('./persistance/config/initializeDatabase');
const environment = require('./infrastructure/config/environment');
const server = require('./infrastructure/webServer/server');

// Start the server
const start = async () => {
  try {
    console.log(database);
    await database.initialize();
    await server.createServer(environment.PORT, environment.URL);
    await server.startServer();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
