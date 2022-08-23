const mongoose = require("mongoose")

const invschema = new mongoose.Schema({
    userID: { type: String },
    cash: { type: Number },
    bank: { type: Number },
    last_activity: { type: String },
    maxspacebag: { type: Number },
    inventory: { type: Array },
    xp: { type: Number },
    level: { type: Number },
    pats: { type: Number },
    rep: { type: Number },
    properties: { type: Array },
    tempHabitacion: { type: Number }
})

const model = mongoose.model("invschema", invschema);

module.exports = model;