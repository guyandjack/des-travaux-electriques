/****** création d'un model produit pour MongoDB *********/

//import du package Mongoose
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    lastname: { type: String, required: false },
    firstname: { type: String, required: false },
    email: { type: String, required: false, unique: false },
    comment: { type: String, required: false },
    adressIp: { type: String, required: false },
    date: { type: String, required: false },
    //formref: {type: String, required: true}
});

module.exports = mongoose.model("user", commentSchema);
