const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error, embed_error_buy_msg, embed_error_not_exist, embbebd_error_not_money } = require(".././configs/embeds.json")
const items = require(".././models/items")
const inventoryschema = require(".././models/inventoryschema")

module.exports = {
    name: "BUY",
    alias: ["buy"],
    description: "Deposita el dinero",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {

        const embed = new EmbedBuilder()
            .setColor(embed_error)
            .setDescription(embed_error_buy_msg)
            .setAuthor({ name: msg.author.tag, iconURL: msg.author.displayAvatarURL({ dynamic: true }) })
        const embed0 = new EmbedBuilder()
            .setColor(embed_error)
            .setDescription(embed_error_not_exist)
            .setAuthor({ name: msg.author.tag, iconURL: msg.author.displayAvatarURL({ dynamic: true }) })
        const embed1 = new EmbedBuilder()
            .setDescription(embbebd_error_not_money)
            .setColor(embed_error)
            .setAuthor({ name: msg.author.tag, iconURL: msg.author.displayAvatarURL({ dynamic: true }) })
        const embed2 = new EmbedBuilder()
            .setColor(embed_succes)
            .setAuthor({ name: msg.author.tag, iconURL: msg.author.displayAvatarURL({ dynamic: true }) })

        if (!args[0]) return msg.channel.send({ embeds: [embed] })

        if (isNaN(args[0])) { // SI ARGUMENNTOS 0 ES LETRAS
            try {
                let itemdata = await items.findOne({ name: args[0] })
                if (!itemdata) return msg.channel.send({ embeds: [embed0] })
                if (args[0] === itemdata.name) {
                    if (!args[1]) {
                        embed2.setDescription("Compraste 1" + itemdata.name)
                        await inventoryschema.findOneAndUpdate({ userID: msg.author.id }, { $push: { inventory: itemdata.name } })
                        invData.cash = invData.cash - itemdata.price
                        invData.save()
                        msg.channel.send({ embeds: [embed2] })
                    } else {
                        embed2.setDescription("Compraste " + args[1] + " " + itemdata.name)
                        const loops = args[1]; // supongamos que es '5';
                        const loopsInt = parseInt(loops);
                        for (let i = 0; i < loopsInt; i++) {
                            await inventoryschema.findOneAndUpdate({ userID: msg.author.id }, { $push: { inventory: itemdata.name } })
                        }
                        invData.cash = invData.cash - itemdata.price * args[1]
                        invData.save()
                        msg.channel.send({ embeds: [embed2] })
                    }
                }
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                let itemdataa = await items.findOne({ id: args[0] })

                if (!itemdataa) return msg.channel.send({ embeds: [embed0] })
                if (args[0] = itemdataa.id) {
                    if (itemdataa.price > invData.cash) return msg.channel.send({ embeds: [embed1] })
                    if (!args[1]) {
                        embed2.setDescription("Compraste 1" + itemdata.name)
                        await inventoryschema.findOneAndUpdate({ userID: msg.author.id }, { $push: { inventory: itemdataa.name } })
                        invData.cash = invData.cash - itemdataa.price
                        invData.save()
                        msg.channel.send({ embeds: [embed2] })
                    } else {
                        embed2.setDescription("Compraste " + args[1] + " " + itemdataa.name)
                        const loops = args[1];
                        const loopsInt = parseInt(loops);
                        for (let i = 0; i < loopsInt; i++) {
                            await inventoryschema.findOneAndUpdate({ userID: msg.author.id }, { $push: { inventory: itemdataa.name } })
                        }
                        invData.cash = invData.cash - itemdataa.price * args[1]
                        invData.save()
                        msg.channel.send({ embeds: [embed2] })
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}



