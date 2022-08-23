const mongoose = require("mongoose")

const properties = new mongoose.Schema({
    id: { type: Number, default: 0 },
    name: { type: String, default: 0 },
    price: { type: Number, default: 0 },
    emoji: { type: String, default: 0 },
    max: { type: Number, default: 0 },
    max_plants: { type: String, default: 0 }
})

const model = mongoose.model("properties", properties);

module.exports = model;