const appRoot = require('app-root-path');
const userData = require(`${appRoot}/supporter/user_data`);

const loginController = function(req, res, next){
    const body = req.body;
    const username = body.username;
    const password = body.password;

    const isUserExisted = userData.isUserExists(username, password);
    if(!isUserExisted) {
        return res.status(422).json({message: 'invalid credentials'});
    }
    return res.status(200).json({message: "login successful"});
}
module.exports = loginController;