const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
module.exports = {
    name: "INVITATION",
    alias: ["invitacion"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {
        const embed = new EmbedBuilder()
            .setTitle("Link de invitacion")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=977008540373905418&permissions=8&scope=bot")
            .setDescription("Con este link podrás invitarme a los servidores que administres.")
            .setColor(embed_info)
        msg.channel.send({ embeds: [embed] })
    }
}