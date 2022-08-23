const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
const properties = require(".././models/properties")

module.exports = {
    name: "createhouse",
    alias: ["ch"],
    description: "Deposita el dinero",
    async execute(client, msg, args, cmd, Discord, invData, MessageEmbed, cdData) {
        if (!args[0]) return msg.channel.send("Porfavor colca la id del item")

        const itemData = await properties.findOne({ id: args[0] })
        if (args[0] === itemData.id) return console.log("Ya existe esto")
        if (isNaN(args[0])) {
            return msg.channel.send("El mensaje debe ser un numero 1")
        } else {

            if (!args[1]) return msg.channel.send("Debes colcar el nombre del de la casa")
            if (!args[2]) return msg.channel.send("Debes colcar el precio de la casa")
            if (isNaN(args[2])) return msg.channel.send("El mensaje debe ser un numero 2")
            if (!args[3]) return msg.channel.send("colca un emoji")

            if (!args[4]) return msg.channel.send("debes colocar un emoji")
            if (isNaN(args[4])) return msg.channel.send("El mensaje debe ser un numero 3")
            if (!args[5]) return msg.channel.send("Debes colocar un max de plantas")
            if (isNaN(args[5])) return msg.channel.send("El mensaje debe ser un numero 3")
            // console.log(args[0] + args[1] + args[2] + args[3] + args[4] + args[5])
            const mosca = await properties.findOne({ id: args[0], name: args[1], price: args[2], emoji: args[3], max: args[4], max_plants: args[5] })
            if (!mosca) {
                let itemList = await properties.create({
                    id: args[0],
                    name: args[1],
                    price: args[2],
                    emoji: args[3],
                    max: args[4],
                    max_plants: args[5]
                })
                console.log(mosca)
                itemList.save()
            }
        }
    }
}

