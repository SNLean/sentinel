const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
module.exports = {
    name: "BALANCE",
    alias: ["bal"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {
        const embed = new EmbedBuilder()
            .setAuthor({ name: `${(msg.author.tag)}`, iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}` })
            // .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
            .setTitle("Resumen de actividad bacaria")
            .setColor(embed_info)
            .setDescription(`**Ultima actividad:**\n${invData.last_activity}`)
            .addFields(
                { name: "Cash:", value: `<a:sn_money:1008254655832268850> ${invData.cash}`, inline: true },
                { name: "Bank:", value: `<a:sn_money:1008254655832268850> ${invData.bank}`, inline: true },
                { name: "Total:", value: `<a:sn_money:1008254655832268850> ${invData.bank + invData.cash}`, inline: true },
            )
        msg.channel.send({ embeds: [embed] })

    }
}

