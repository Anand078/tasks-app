var express = require('express');
var router = express.Router();

const appRoot = require('app-root-path');
const loginController = require(`${appRoot}/controller/auth/login`);
const registerController = require(`${appRoot}/controller/auth/register`);
const getTotalUserListController = require(`${appRoot}/controller/auth/getTotalUserList`);

router.post('/login', loginController);
router.post('/register', registerController);
router.get('/get-user-list', getTotalUserListController);

module.exports = router;