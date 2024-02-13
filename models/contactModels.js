const { JsonWebTokenError } = require("jsonwebtoken");
const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the email"],
    },
    phone: {
        type: String,
        required: [true, "Please add the phone"],
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Contact", contactSchema);