const BaseApiController = require('../baseApiController');

module.exports = class UserAccountController {
  constructor(Services) {
    //super();
    console.log(Services);
    this.userAccountService = Services.userAccountService;
  }
  getUsers = (httpRequest, httpResponse, next) => {
    this.userAccountService.getUsers().then((result) => {
      httpResponse.json(result);
    });
  };
  getById = async (userId) => {
    let user = await this.userAccountService.getById(userId);
    httpResponse.render('user:', {
      users: user,
      pageTitle: 'User',
      path: '/user',
    });
  };
};
