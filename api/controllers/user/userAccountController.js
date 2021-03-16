const baseApiController = require('../baseApiController');

const userAccountRepository = require('../../../persistance/user/mongoose/userAccountRepository');
const userAccountService = require('../../../application/user/userAccountService');

module.exports = class extends baseApiController {
  constructor() {
    super();
    //this.userAccountService = _userAccountService;
  }
  async getUsers(httpRequest, httpResponse, next) {
    let repo = new userAccountRepository();
    let userAccount = new userAccountService(repo);
    const result = await userAccount.getUsers();
    return httpResponse.json(result);

    // return httpResponse.json('users', {
    //   users: users,
    //   pageTitle: 'All Users',
    //   path: '/users',
    // });
  }
  async getById(userId) {
    let user = await this.userAccountService.getById(userId);
    httpResponse.render('user:', {
      users: user,
      pageTitle: 'User',
      path: '/user',
    });
  }
  //   async getByEmail(email) {
  //     return await this._userAccountRepository.getByEmail(email);
  //   }
  //   async saveUser(userAccount) {
  //     await this._userAccountRepository.save(userAccount);
  //   }
  //   async login(userName, password) {
  //     return await this._userAccountRepository.login(userName, password);
  //   }
  //   async checkAvailability(userName) {
  //     return await this._userAccountRepository.checkAvailability(userName);
  //   }
  //   async deleteUser(userId) {
  //     return await this._userAccountRepository.deleteUser(userId);
  //   }
};
