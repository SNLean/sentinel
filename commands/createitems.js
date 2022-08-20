const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
const itemModel = require(".././models/items")

module.exports = {
    name: "createitem",
    alias: ["ci"],
    description: "Deposita el dinero",
    async execute(client, msg, args, cmd, Discord, invData, MessageEmbed, cdData) {
        if (!args[0]) return msg.channel.send("Porfavor colca la id del item")
        if (isNaN(args[0])) {
            return msg.channel.send("El mensaje debe ser un numero 1")
        } else {

            if (!args[1]) return msg.channel.send("Debes colcar el nombre del item")
            if (!args[2]) return msg.channel.send("Debes colcar el tipo de item")


            if (!args[3]) return msg.channel.send("colca el precio del item")
            if (isNaN(args[3])) return msg.channel.send("El mensaje debe ser un numero 2 ")
            if (!args[4]) return msg.channel.send("debes colocar un emoji")
            if (!args[5]) return msg.channel.send("Debes colocar un max")
            if (isNaN(args[5])) return msg.channel.send("El mensaje debe ser un numero 3")
            // console.log(args[0] + args[1] + args[2] + args[3] + args[4] + args[5])

            let itemData;

            itemData = await itemModel.findOne({ id: args[0] })
            if (!itemData) {
                let itemList = await itemModel.create({
                    id: args[0],
                    name: args[1],
                    type: args[2],
                    price: args[3],
                    emoji: args[4],
                    max: args[5]
                })
                console.log(itemData)
                itemList.save()
            } console.log(itemData)
        }
    }
}

