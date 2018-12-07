const appRoot = require('app-root-path');
const userData = require(`${appRoot}/supporter/user_data`);

const registerController = function(req, res, next){
    const body = req.body;
    const username = body.username;
    const password = body.password;
    const fullname = body.fullname;
    const email = body.email;
    const contactNumber = body.contact_number;

    const isUserExisted = userData.isUsernameExisted(username);
    if(isUserExisted) {
        return res.status(422).json({
            message: "This username already existed"
        });
    }
    userData.createUser(username, password, fullname, email, contactNumber);
    res.status(201).json({
        message: 'User has been created successfully!'
    });
}
module.exports = registerController;