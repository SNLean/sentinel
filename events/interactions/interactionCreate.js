const { prefix } = require("../../configs/config.json")
const { embed_info, embed_succes, embed_error } = require("../../configs/embeds.json")
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")
const itemModel = require("../../models/items")

module.exports = async (Discord, client, interaction, msg) => {
    if (!interaction.isSelectMenu())
        if (!interaction.isButton()) return

    if (interaction.isButton()) {
        console.log("xD")
        if (interaction.customId === 'primary') {
            await console.log("xD")
            if (!interaction.member.roles.cache.has("1011438119251357766")) {
                await interaction.member.roles.add("1011438119251357766")
            } else if (interaction.member.roles.cache.has("1011438119251357766")) {
                await interaction.member.roles.remove("1011438119251357766")
            }
        }
    } else if (interaction.isSelectMenu()) {
        let item01 = await itemModel.findOne({ id: 01 })
        let item02 = await itemModel.findOne({ id: 02 })
        let item03 = await itemModel.findOne({ id: 03 })
        let item04 = await itemModel.findOne({ id: 04 })
        let item05 = await itemModel.findOne({ id: 05 })
        let item06 = await itemModel.findOne({ id: 06 })
        let item07 = await itemModel.findOne({ id: 07 })
        let item08 = await itemModel.findOne({ id: 08 })
        let item09 = await itemModel.findOne({ id: 09 })
        let item10 = await itemModel.findOne({ id: 10 })
        let item11 = await itemModel.findOne({ id: 11 })
        let item12 = await itemModel.findOne({ id: 12 })
        let item20 = await itemModel.findOne({ id: 20 })
        if (interaction.customId === 'select') {
            if (interaction.values[0] === "first_option") {
                const embed = new EmbedBuilder()
                    .setTitle("🛒 Tienda de consumibles")
                    .setDescription("Bienvenidos a la tienda de consumibles.\nPodes comprar con **`!buy <item name o id>`**")
                    .setColor(embed_info)
                    .setFields(
                        { name: `${item01.emoji} ${item01.name} ` + "`[ID:" + `${item01.id}` + "]` — " + `<a:sn_money:1008254655832268850> ${item01.price}`, value: "Botella de agua, usala para distintas cosas" },
                        { name: `${item02.emoji} ${item02.name} ` + "`[ID:" + `${item02.id}` + "]` — " + `<a:sn_money:1008254655832268850> ${item02.price}`, value: "Botella de agua, usala para distintas cosas" }
                    )
                    .setImage("https://media.discordapp.net/attachments/1010997170553495622/1010997217856860241/nekoshop.png")
                await interaction.update({ embeds: [embed] })
            } else if (interaction.values[0] === "second_option") {
                const embed = new EmbedBuilder()
                    .setTitle("🛒 Tienda de macetas")
                    .setDescription("Bienvenidos a la tienda de consumibles.\nPodes comprar con **`!buy <item name o id>`**")
                    .setColor(embed_info)
                    .setFields(
                        { name: `${item10.emoji} ${item10.name} ` + "`[ID:" + `${item10.id}` + "]` — " + `<a:sn_money:1008254655832268850> ${item10.price}`, value: "Botella de agua, usala para distintas cosas" },
                        { name: `${item11.emoji} ${item11.name} ` + "`[ID:" + `${item11.id}` + "]` — " + `<a:sn_money:1008254655832268850> ${item11.price}`, value: "Botella de agua, usala para distintas cosas" },
                        { name: `${item12.emoji} ${item12.name} ` + "`[ID:" + `${item12.id}` + "]` — " + `<a:sn_money:1008254655832268850> ${item12.price}`, value: "Botella de agua, usala para distintas cosas" },
                    )
                    .setImage("https://media.discordapp.net/attachments/1010997170553495622/1010997217856860241/nekoshop.png")
                await interaction.update({ embeds: [embed] })
            } else if (interaction.values[0] === "third_option") {
                const embed = new EmbedBuilder()
                    .setTitle("🛒 Tienda de macetas")
                    .setDescription("Bienvenidos a la tienda de consumibles.\nPodes comprar con **`!buy <item name o id>`**")
                    .setColor(embed_info)
                    .setFields(
                        { name: `${item20.emoji} ${item20.name} ` + "`[ID:" + `${item20.id}` + "]` — " + `<a:sn_money:1008254655832268850> ${item20.price}`, value: "Botella de agua, usala para distintas cosas" }
                    )
                    .setImage("https://media.discordapp.net/attachments/1010997170553495622/1010997217856860241/nekoshop.png")
                await interaction.update({ embeds: [embed] })
            } else if (interaction.values[0] === "fiveth_option") {

            }
        } else if (interaction.customId === "Help") {
            /*if (interaction.values[0] === "first_option") {
                const embed0 = new EmbedBuilder()
                    .setTitle("Comados El Sentinel")
                    .setDescription("**» Menú Help**\n\nLista de comandos: `!help <categoria>`\nComando en detalle: `!help <comando>`\n**» Enlaces útiles**\n[Website](https://discord.gg/NTvuDqt2R6) | [Privacidad](https://discord.gg/NTvuDqt2R6) | [Soporte](https://discord.gg/NTvuDqt2R6) | [Encuesta](https://discord.gg/NTvuDqt2R6)")
                    .setColor(embed_info)
                await interaction.update({ embeds: [embed0] })
            } else*/ if (interaction.values[0] === "second_option") {
                const embed = new EmbedBuilder()
                    .setTitle("Comandos de El sentinel")
                    .setDescription("Ayuda detallada sobbre un comando: `!help <comando>`\nPara ayuda adicional, visita [servidor de soporte](https://discord.gg/NTvuDqt2R6)")
                    // .addField("aa","aaa")
                    .setColor(embed_info)
                    .setFields(
                        { name: "<a:sn_book:1008940105634959410> Comandos", value: "```bal     deposit     inventory\nshop    profile     properties\nbuy    withdraw     \nwork```", inline: false },
                        { name: "<a:sn_star:1008923694141296710> Premium", value: "```daily    weekly```", inline: false }
                    )
                // .setImage("https://media.discordapp.net/attachments/1010997170553495622/1010997217856860241/nekoshop.png")
                await interaction.update({ embeds: [embed] })
            }
        }

    }
}
