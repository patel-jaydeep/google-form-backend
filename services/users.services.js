const { User } = require("../model/user.model")


const findUser = async (condition = {}) => {
    const data = await User.findOne(condition);
    return data;
}

const CreateUser = async (userData = {}) => {
    const newUser = User(userData);
    const data = await newUser.save();
    return data;
}

module.exports = {
    CreateUser,
    findUser
}