/****** création d'un model "commentaire" pour MongoDB *********/

//import du package Mongoose
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({

    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    comment: { type: String, required: true },
    adressIp: { type: String, required: true },
    date: { type: String, required: true },
    pageref: {type: String, required: true},
    isresponse: { type: Boolean, required: true },
    originalcommentid: { type: String, required: true },
    userdata:{type: String, required: false}
    
});

module.exports = mongoose.model("user", commentSchema);
