const itemModel = require(".././models/items")
const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
const { ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")
module.exports = {
    name: "test",
    alias: ["prueba"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData, ActionRowBuilder, interaction) {

        const embed0 = new EmbedBuilder()
            .setTitle("VERIFICACION")
            .setDescription(`Clickea el boton para verificarte y ver el resto de canales!`)
            .setColor(embed_info)
        // .setImage("https://cdn.discordapp.com/attachments/1010997170553495622/1011435245553328189/nekoshaop.png?size=4096")
        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Categorias')
                    .addOptions(
                        {
                            label: 'Consumibles ',
                            description: 'Son objetos capaces de ser consumidos',
                            value: 'first_option',
                            emoji: "<:bottle:1010276904240165017>",
                        },
                        {
                            label: 'Macetas',
                            description: 'Podes ver la variedad de macetas',
                            value: 'second_option',
                            emoji: "<:maceta:1011007617474240654>"
                        },
                        {
                            label: 'Semillas',
                            description: 'Podes ver la variedad de las semillas',
                            value: 'third_option',
                            emoji: "<:seeds_auto:1007649414183129148>"
                        },
                        {
                            label: 'Propiedades',
                            description: 'Podes ver la lista de propiedades',
                            value: 'fourth_option',
                            emoji: "<:casa:1011016553715736616>"
                        },
                    )
            )

        msg.channel.send({ embeds: [embed0], components: [row] })
    }
}
