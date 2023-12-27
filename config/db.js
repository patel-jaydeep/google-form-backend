
const mongoose = require("mongoose");
const createAdmin = require("../seeders/admin.seeders");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL);
        if (connect) {
            console.log("DB connected");
            await createAdmin();
            return connect;
        }
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectDB