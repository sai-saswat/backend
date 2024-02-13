const mongoose = require("mongoose");

const connectDb = async () => {

    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Db connection established");
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;