'use strict';

const mongoose = require('mongoose');
const environment = require('../../../infrastructure/config/environment');
module.exports = class ConfigureDatabase {
  constructor() {
    this.mongoose = mongoose;
    this.environment = environment;
  }
  connectMongoose = () => {
    this.mongoose
      .connect(environment.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((result) => {
        console.log('connected to MongoDB database!');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getMongoose = () => {
    return this.mongoose;
  };
};

// mongoose
//   .connect(environment.DATABASE_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const dbConnection = mongoose.connection;
// dbConnection.on('error', console.error.bind(console, 'connection error:'));
// dbConnection
//   .once('open', () => {
//     console.log('connected to MongoDB database!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// module.exports = mongoose;
