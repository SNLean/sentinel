const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
module.exports = {
    name: "DEPOSIT",
    alias: ["dep", "depositar"],
    description: "Deposita el dinero",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {
        let amount = args[0]

        const embed = new EmbedBuilder()
            .setDescription(`<a:sn_no:977603863794303047> No hay argumentos.\nUsa:\ndeposit <cantidad o all>`)
            .setColor(embed_error)
            .setAuthor({ name: `${(msg.author.tag)}`, iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}` })
        if (!amount) return msg.channel.send({ embeds: [embed] })

        if (isNaN(amount)) {
            if (amount.toLowerCase().includes('all')) {
                amount = invData.cash;
            } else return msg.channel.send({ embeds: [embed] })
        }


        if (amount > invData.cash) {
            const embed1 = new EmbedBuilder()
                .setDescription(`<a:sn_no:977603863794303047> No tenes dinero para depositar`)
                .setColor(embed_error)
                .setAuthor({ name: `${(msg.author.tag)}`, iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}` })
            return msg.channel.send({ embeds: [embed1] })
        }

        if (amount) {
            const embed0 = new EmbedBuilder()
                .setDescription(`<a:sn_si:977603386008543312> Depositaste <a:sn_money:1008254655832268850> ${amount} en tu cuenta bancaria`)
                .setColor(embed_succes)
                .setAuthor({ name: `${(msg.author.tag)}`, iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}` })
            invData.cash = `${invData.cash - amount}`
            invData.bank = `${invData.bank + amount}`
            invData.last_activity = `Deposit : + <a:sn_money:1008254655832268850> ${amount}`
            invData.save()
            msg.channel.send({ embeds: [embed0] })
        }

    }
}

