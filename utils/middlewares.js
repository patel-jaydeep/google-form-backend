const { ADMIN_CONST, USER_CONST } = require("./const");

const checkUserIsAdmin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    //Authorization: 'Bearer TOKEN'
    if (!token) {
        res.status(404).json({
            success: false, message: "Error! Token was not provided."
        });
    }
    //Decoding the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedToken && decodedToken?.type === ADMIN_CONST) {
        next()
    } else {
        return res.status(401).send("Invalid token")
    }
}

const checkIsUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    //Authorization: 'Bearer TOKEN'
    if (!token) {
        res.status(200).json({
            success: false, message: "Error! Token was not provided."
        });
    }
    //Decoding the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedToken && decodedToken?.type === USER_CONST) {
        next()
    } else {
        return res.status(401).send("Invalid token")
    }
}

module.exports = {
    checkUserIsAdmin,
    checkIsUser
}