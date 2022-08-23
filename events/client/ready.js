const { prefix } = require("../../configs/config.json")
const mongoose = require("mongoose");
require('dotenv').config();

module.exports = (client) => {
    console.log(".......................................................")
    console.log(":'######::'##::: ##::::'########::'########:'##::::'##:")
    console.log("'##... ##: ###:: ##:::: ##.... ##: ##.....:: ##:::: ##:")
    console.log(" ##:::..:: ####: ##:::: ##:::: ##: ##::::::: ##:::: ##:")
    console.log(". ######:: ## ## ##:::: ##:::: ##: ######::: ##:::: ##:")
    console.log(":..... ##: ##. ####:::: ##:::: ##: ##...::::. ##:: ##::")
    console.log("'##::: ##: ##:. ###:::: ##:::: ##: ##::::::::. ## ##:::")
    console.log(". ######:: ##::. ##:::: ########:: ########:::. ###::::")
    console.log(":......:::..::::..:::::........:::........:::::...:::::")
    console.log("")
    console.log("")
    console.log("Prefix definido: " + prefix)
    console.log("")
    mongoose.connect(process.env.dbmongoose, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Conectado a la base de datos de mongoose");
        console.log("")
        console.log("")
        console.log("")
    }).catch((err) => {
        console.log(err);
    });


}