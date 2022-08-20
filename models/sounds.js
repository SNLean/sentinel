const mongoose = require("mongoose")

const sounds = new mongoose.Schema({
    guildID: { type: Number, default: 0 },
    userID: { type: String, default: 0 },
    name: { type: String, default: 0 },
    url: { type: String, default: 0 }
})

const model = mongoose.model("sounds", sounds);

module.exports = model;