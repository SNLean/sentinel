const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
const ms = require("parse-ms")

module.exports = {
    name: "WORK",
    alias: ["work", "trabajo", "trabajar"],
    description: "Trabajito",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {
        let repTiempo = await cdData.workcd

        let timeout = 300000

        if (repTiempo !== null && timeout - (Date.now() - repTiempo) > 0) {
            let time = ms(timeout - (Date.now() - repTiempo))
            let mono = `<:sn_time:1008253169253494814> Proba volver a trabajar en: ${time.minutes}m ${time.seconds}s`
            if (time.minutes === 0) {
                mono = `<:sn_time:1008253169253494814> Proba volver a trabajar en: ${time.seconds}s`
            }
            const embed = new EmbedBuilder()
                .setDescription(mono)
                .setColor(embed_error)
                .setAuthor({ name: `${(msg.author.tag)}`, iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}` })
            return msg.channel.send({ embeds: [embed] })
        } else {
            let fraces = [
                "Trabajaste en una pizzeria, ganaste ",
                "Rappi te hizo laburar como esclavo y ganaste ",
                "Vendiste chocolastes en el roca como un pelotudo y ganaste "
            ]
            let random = fraces[Math.floor(Math.random() * fraces.length)]
            var min = 500;
            var max = 1500;
            var x = Math.floor(Math.random() * (max - min + 1) + min);

            const embed = new EmbedBuilder()
                .setDescription(`${random} <a:sn_money:1008254655832268850> ${x}`)
                .setColor(embed_succes)
                .setAuthor({ name: `${(msg.author.tag)}`, iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}` })
            msg.channel.send({ embeds: [embed] })

            cdData.workcd = Date.now()
            cdData.save()
            invData.last_activity = `Work: + <a:sn_money:1008254655832268850> ${x}`
            invData.cash = invData.cash + x
            invData.save()
        }
    }
}

