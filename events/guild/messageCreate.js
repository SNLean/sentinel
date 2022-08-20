const { prefix } = require("../../configs/config.json")
const { Collection, EmbedBuilder, ActionRowBuilder } = require("discord.js")
const invModel = require("../../models/inventoryschema")
const cooldowns = require("../../models/cooldowns")

module.exports = async (Discord, client, msg, interaction) => {
    if (msg.author.bot) return
    let invData;

    try {
        invData = await invModel.findOne({ userID: msg.author.id })
        if (!invData) {
            let profile = await invModel.create({
                userID: msg.author.id,
                cash: 0,
                bank: 0,
                last_activity: "No hay movimientos",
                maxspacebag: "5",
                inventory: [],
                xp: 0,
                level: 0,
                pats: 0,
                rep: 0
            })
            console.log("Base de datos creada de:" + msg.author.id)
            profile.save()
        }
    } catch (err) {
        console.log(err)
    }


    let cdData;

    try {
        cdData = await cooldowns.findOne({ userID: msg.author.id })
        if (!cdData) {
            let profile = await cooldowns.create({
                userID: msg.author.id,
                workcd: 0,
                dailycd: 0,
                repcd: 0
            })
            console.log("Base de datos creada de:" + msg.author.id)
            profile.save()
        }
    } catch (err) {
        console.log(err)
    }

    if (!msg.content.startsWith(prefix)) {
        console.log("hola")
        return
    }

    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    let command = client.commands.get(cmd) || client.commands.find(a => a.alias && a.alias.includes(cmd));

    try {
        if (command) {
            command.execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData, ActionRowBuilder)
        }
    } catch (err) {
        console.log(err)
        msg.channel.send("Ocurrio un error, contacta al soporte del bot")
    }
}