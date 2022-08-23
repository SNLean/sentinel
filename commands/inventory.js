const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
module.exports = {
    name: "INVENTORY",
    alias: ["inv", "inventario"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {

        let items = ["Semillas normales", "Macetas", ":military_medal: Medalla de beta tester", "Water"]
        let itemsinv = invData.inventory
        // console.log(invData.inventory.count())

        // console.log(await itemsinv) //count(x)a
        // console.log(invData.inventory.length)
        // console.log(`Array del inventario: ${invData.inventory}`)
        let xd = items.filter(x => itemsinv.count(x) > 0).map(x => `${x} (x${itemsinv.count(x)})`)

        // console.log(xd)
        let asa = items.filter(x => itemsinv.count(x) > 0).map(x => `${itemsinv.count(x)}`)
        // console.log(asa)
        const embed = new EmbedBuilder()
            .setDescription(`Podes consumir un item escribiedo ` + "`!use <item name>`" + `\n\n**Lista de items**\nNo hay items aqui`)
            .setColor("#1a76ff")
            .setAuthor({
                name: "Mochila",
                iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}`
            })

        const embed0 = new EmbedBuilder()
            .setDescription(`Podes consumir un item escribiedo ` + "`!use <item name>`" + `\n\n**Lista de items**\n${xd.join('\n')}`)
            .setColor("#1a76ff")
            .setAuthor({
                name: "Mochila",
                iconURL: `${msg.author.displayAvatarURL({ dynamic: true })}`
            })
        // console.log(asa)

        msg.channel.send({ embeds: [embed0] })
    }
}

