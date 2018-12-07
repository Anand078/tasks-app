const userDetails = [];
let userCount = 1;
const getUserDetails = ()=> {
    return userDetails;
};
const isUserExists = (username, password)=> {
    const requiredData = userDetails.filter((data)=> {
        return data.username === username && data.password === password;
    });
    return requiredData.length>0;
}
const isUsernameExisted = (username)=> {
    const requiredData = userDetails.filter((data)=> {
        return data.username === username;
    });
    return requiredData.length>0;
};
const createUser = (username, password, fullname, email, contactNumber)=> {
    const userData = {
        user_id: userCount,
        username,
        password,
        fullname,
        email,
        contact_number: contactNumber,
        created_at: new Date()
    };
    userCount++;
    userDetails.push(userData);
}
module.exports = {
    getUserDetails,
    isUserExists,
    isUsernameExisted,
    createUser
};