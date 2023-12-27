const { findUser } = require("../services/users.services");
const { checkPasswordIsMatched, createToken } = require("../utils/helper");


const createUser = (req, res) => {
    return res.json({
        'name': "ABCD"
    })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(422).json("Email is missing")
    }
    if (!password) {
        return res.status(422).json("Password is missing")
    }
    const existingUser = await findUser({
        email,
    });
    if (existingUser) {
        const isPassMatched = await checkPasswordIsMatched(password, existingUser?.password)
        if (isPassMatched) {
            const token = await createToken({
                _id: existingUser?._id,
                email: existingUser?.email,
                type: existingUser?.type
            });
            return res.json({
                "messsage": "success",
                token
            })
        }
        return res.status(422).json("Password does not match with Database")
    } else {
        return res.status(404).json("User not found")
    }
}

module.exports = {
    loginUser,
    createUser
}