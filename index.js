'use strict';

const database = require('./persistance/config/initializeDatabase');
const environment = require('./infrastructure/config/environment');
const server = require('./infrastructure/webServer/server');

// //const domainUser = require('./domain/user/userAccount');
// const userAccountRepository = require('./persistance/user/mongoose/userAccountRepository');
// const userAccountService = require('./application/user/userAccountService');
//const userController = require('./api/controllers/user/userAccountController');
// Start the server
const start = async () => {
  try {
    //console.log(database);
    await database.initialize();
    await server.createServer(environment.PORT, environment.URL);
    await server.startServer();
    // const user = new domainUser(
    //   null,
    //   'khurram',
    //   '111',
    //   'khurram',
    //   '2302222',
    //   'shahzad',
    //   'khurram@bitofai.com',
    //   'Male',
    //   '1/1/2000',
    //   '0300',
    //   true,
    //   'ssss',
    //   '1/1/2021',
    //   'khurram',
    //   '1/1/2021',
    //   ''
    // );
    // const repository = new userAccountRepository();
    // // await repository.saveUser(user);
    // const repository = new userAccountRepository();
    // const service = new userAccountService(repository);
    // const controller = new userController(service);
    //const user = await controller.getUsers();

    //console.log(user);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
