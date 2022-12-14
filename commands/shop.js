const itemModel = require(".././models/items")
const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js")

module.exports = {
    name: "shop",
    alias: ["tienda"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData, ActionRowBuilder, interaction) {

        const embed0 = new EmbedBuilder()
            .setTitle("🛒 Tienda")
            .setDescription("Bienvenidos a la tienda.\nPuedes revisar el precio de cada objeto en el catalogo\nPodes comprar con **`!buy <item name o id>`**")
            .setColor(embed_info)
            .setImage("https://media.discordapp.net/attachments/1010997170553495622/1010997217856860241/nekoshop.png")
        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Catalogo')
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
                    ),
            );

        const filter = (interaction) => { interaction.isSelectMenu() && interaction.user.id === msg.author.id }

        const collector = msg.channel.createMessageComponentCollector(filter);


        collector.on("collect", async (collected) => {
            const values = collected.values[0];
            // console.log(values)
            // collected.deferUpdate();
        })


        msg.channel.send({ embeds: [embed0], components: [row] });
    }
}
