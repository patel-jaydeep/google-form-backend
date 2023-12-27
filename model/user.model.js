// @/models.js
const mongoose = require("mongoose");
const { USER_TYPE, USER_CONST } = require("../utils/const");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String, enum: USER_TYPE, default: USER_CONST
    },
    create_by: {
        type: mongoose.Schema.ObjectId,
    },
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };