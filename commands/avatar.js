const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
module.exports = {
    name: "avatar",
    alias: ["av"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {
        let mono = await msg.mentions.users.first() || client.users.cache.get(args[0]) || msg.author
        const embed = new EmbedBuilder()
            .setColor(embed_info)
            .setDescription(`Avatar pedido por: ${msg.author}\nAvatar de:${mono.tag}`)
            .setImage(mono.displayAvatarURL({ dynamic: true, size: 4096, format: "png" }))
        msg.channel.send({ embeds: [embed] })

    }
}

