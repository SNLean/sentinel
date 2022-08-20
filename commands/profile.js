const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
module.exports = {
    name: "profile",
    alias: ["perfil"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {
        let b = await msg.mentions.users.first() || client.users.cache.get(args[0]) || msg.author

        let xpmax = 10
        let mono = `${invData.xp + "/" + xpmax}`

        if (invData.level === 1) {
            xpmax = 100
        } else if (invData.level === 9999999) {
            mono = `**DEV POWER**`
        }

        let mochila;
        if (invData.maxspacebag === 5) mochila = "Basica"
        if (invData.maxspacebag === 30) mochila = "Mediana"
        if (invData.maxspacebag === 100) mochila = "Grande"
        if (invData.maxspacebag === 200) mochila = "Explorador"

        const embed = new EmbedBuilder()
            .setAuthor({ name: `${(b.tag)}`, iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}` })
            .setDescription("<a:sn_star:1008923694141296710> Nivel: " + invData.level + " (" + mono + ")")
            .setColor(embed_info)
            .addFields(
                { name: "Stats", value: "<a:sn_pat:1008925540188696658> Pat: " + invData.pats + "\n<a:sc_book:1008940105634959410> Rep: " + invData.rep + "\n<:sn_mari_pot:1008953790206054480> Plants: ", inline: true },
                { name: "Mochila", value: "<a:sn_money:1008254655832268850> Cash: " + invData.cash + "\n:bank: Banco: " + invData.bank + "\n<:sn_bag:1008952962946711663> Mochila: " + mochila, inline: true }

            )
            .setThumbnail(b.displayAvatarURL({ dynamic: true }))
        msg.channel.send({ embeds: [embed] })
        // console.log(invData.inventory.length)
    }
}