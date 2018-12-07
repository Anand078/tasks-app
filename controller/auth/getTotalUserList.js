const appRoot = require('app-root-path');
const userData = require(`${appRoot}/supporter/user_data`);

const getTotalUserList = function(req, res, next){
    res.json({"All Users":userData.getUserDetails()});
}
module.exports = getTotalUserList;