
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const encryptPassword = async (password) => {
    // Encryption of the string password
    const genSalt = await bcrypt.genSalt(10)
    if (genSalt) {
        // The bcrypt is used for encrypting password.
        const bcrptPass = await bcrypt.hash(password, genSalt);
        if (bcrptPass) {
            return bcrptPass
        }
    }
    return false;
}

const checkPasswordIsMatched = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword)
    if (isMatch) {
        return true;
    }

    if (!isMatch) {
        return false;
    }
}

const createToken = (userData) => {
    try {
        //Creating jwt token
        return jwt.sign(
            userData,
            process.env.JWT_SECRET_KEY,
        );
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    encryptPassword,
    checkPasswordIsMatched,
    createToken
}