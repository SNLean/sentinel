const mongoose = require("mongoose")

const invschema = new mongoose.Schema({
    userID: { type: Number, require: true },
    cash: { type: Number, default: 0 },
    bank: { type: Number, default: 0 },
    last_activity: { type: String, require: true },
    maxspacebag: { type: Number, default: 5 },
    inventory: { type: Array, default: [] },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
    pats: { type: Number, default: 0 },
    rep: { type: Number, default: 0 }
})

const model = mongoose.model("invschema", invschema);

module.exports = model;