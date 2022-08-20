const { prefix } = require("../../configs/config.json")
const { embed_info, embed_succes, embed_error } = require("../../configs/embeds.json")
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js")
module.exports = async (Discord, client, interaction, msg) => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === 'select') {
        // console.log(interaction)

        const embed = new EmbedBuilder()
            .setDescription("Hola")
            .setColor(embed_error)
        await interaction.update({ embeds: [embed] });
    }
}  
