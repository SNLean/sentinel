const mongoose = require("mongoose")

const cooldowns = new mongoose.Schema({
    userID: { type: Number, default: 0 },
    workcd: { type: Number, default: 0 },
    dailycd: { type: Number, default: 0 },
    repcd: { type: Number, default: 0 }
})

const model = mongoose.model("cooldowns", cooldowns);

module.exports = model;