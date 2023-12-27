const { findUser, CreateUser } = require("../services/users.services")
const { ADMIN_CONST } = require("../utils/const");
const { encryptPassword } = require("../utils/helper");

const createAdmin = async () => {
    const existingUser = await findUser({
        type: ADMIN_CONST
    });
    if (!existingUser) {
        const encrypt_pass = await encryptPassword(process.env.ADMIN_PASSWORD);
        const userData = await CreateUser({
            email: process.env.ADMIN_EMAIL,
            name: process.env.ADMIN_USER,
            password: encrypt_pass,
            type: ADMIN_CONST
        })
        if (userData) {
            console.log("ADMIN CREATED SUCCESS")
            return true;
        }
    }
    console.log("ADMIN EXIST!!")
    return true;
}

module.exports = createAdmin