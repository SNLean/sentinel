const propiedades = require(".././models/inventoryschema")
const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js")
const raton = require(".././models/properties")


module.exports = {
    name: "Properties",
    alias: ["propiedades"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData, ActionRowBuilder, interaction) {

        const mono = await propiedades.findOne({ userID: msg.author.id })

        const perro = ["Habitacion", "Departamento", "Casa", "Galpon"]
        const caracol = mono.properties

        const caballo = perro.filter(x => caracol.count(x) > 0).map(x => `${x} Obtenido`)


        // if (caracol.count("Departamento") === 1)
        if (!args[0]) {
            let casas = caballo.join('\n')
            if (caballo.length === 0) casas = "No tenes propiedades disponibles"
            const embed0 = new EmbedBuilder()
                .setTitle("<:casa:1011016553715736616> Propiedades")
                .setDescription("Aca podes ver tus propiedades\n**-** " + casas + "")
                .setColor(embed_info)
            msg.channel.send({ embeds: [embed0] })
        } else if (args[0] === "buy") {
            if (args[1] === "Departamento" || args[1] === "Casa" || args[1] === "Galpon") {
                const mosca = await raton.findOne({ name: args[1] })
                if (caracol.count(args[1]) === 1) {
                    return msg.channel.send("Ya tenes el maximo (1)")
                } else {
                    if (invData.cash < mosca.price) return console.log("xD")
                    try {
                        const profile = await propiedades.findOneAndUpdate({ userID: msg.author.id }, { $push: { properties: args[1] } })
                        const unauno = "un"
                        if (args[1] === "casa") unauno = unna
                        msg.channel.send("Acabas de comprar " + unauno + " " + args[1])
                        profile.save()
                        invData.cash = invData.cash - mosca.price
                        invData.save()
                    } catch (err) {
                        console.log(err)
                    }
                }
            } else {
                console.log("Chau")
            }
        } else if (args[0] === "alquilar") {
            if (args[1] === "Habitacion") {

            }
        }
    }
}


