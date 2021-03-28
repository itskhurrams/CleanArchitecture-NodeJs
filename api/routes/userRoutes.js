const express = require('express');
const router = express.Router();
const diContainer = require('../../infrastructure/diContainer/dependancyContainer');

router.get('/users', diContainer.resolve('userAccountController').getUsers);

module.exports = router;
