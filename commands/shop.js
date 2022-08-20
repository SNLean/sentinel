const itemModel = require(".././models/items")
const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js")

module.exports = {
    name: "shop",
    alias: ["tienda"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {
        let itemData = await itemModel.findOne({ id: 01 })

        // const embed = new EmbedBuilder()
        //     .setTitle("🛒 Tienda de semillas")
        //     .setDescription("Bienvenidos a la tienda.\nPodes comprar con **`!buy <item name o id>`**")
        //     .setColor("#1a76ff")
        //     .addFields(
        //         { name: `${itemData.emoji} ${itemData.name} ` + "`[ID:" + `${itemData.id}` + "]` — " + `<a:sn_money:1008254655832268850> ${itemData.price}`, value: "hola" },
        //         //     { name: `${itemModel.emoji} ${itemModel.name} ` + "`[ID:" + `${itemModel.id}` + "]` — " + `<a:sn_money:1008254655832268850>${itemModel.price}`, value: itemModel.desc },
        //     )
        const embed0 = new EmbedBuilder()
            .setTitle("🛒 Tienda")
            .setDescription("Bienvenidos a la tienda.\nPara ver los items elige una categoria de la list\nPodes comprar con **`!buy <item name o id>`**")
            .setColor(embed_info)

        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions(
                        {
                            label: 'Select me',
                            description: 'This is a description',
                            value: 'first_option',
                        },
                        {
                            label: 'You can select me too',
                            description: 'This is also a description',
                            value: 'second_option',
                        },
                    ),
            );

        msg.reply({ embeds: [embed0], components: [row] });




    }
}
