const express = require('express');
const router = express.Router();

const userAccountController = require('../controllers/user/userAccountController');

// /users => GET
router.get('/users', new userAccountController().getUsers);

module.exports = router;
// 'use strict';

// const userAccountController = require('../controllers/user/userAccountController');

// module.exports = {
//   name: 'users',
//   version: '1.0.0',
//   register: async (server) => {
//     server.route([
//       {
//         method: 'GET',
//         path: '/users',
//         handler: userAccountController.getUsers,
//         options: {
//           description: 'List all users',
//           tags: ['api'],
//         },
//       },
//       //   {
//       //     method: 'POST',
//       //     path: '/users',
//       //     handler: userAccountController.saveUser,
//       //     options: {
//       //       description: 'Create a user',
//       //       tags: ['api'],
//       //     },
//       //   },
//       //   {
//       //     method: 'GET',
//       //     path: '/users/{id}',
//       //     handler: userAccountController.getById,
//       //     options: {
//       //       description: 'Get a user by its {id}',
//       //       tags: ['api'],
//       //     },
//       //   },
//       //   {
//       //     method: 'DELETE',
//       //     path: '/users/{id}',
//       //     handler: userAccountController.deleteUser,
//       //     options: {
//       //       description: 'Delete a user',
//       //       tags: ['api'],
//       //     },
//       //   },
//     ]);
//   },
// };
