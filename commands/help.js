const itemModel = require(".././models/items")
const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")
const { ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    name: "HELP",
    alias: ["help", "ayuda"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData, ActionRowBuilder, interaction) {

        const embed0 = new EmbedBuilder()
            .setTitle("Comados El Sentinel")
            .setDescription("**» Menú Help**\n\nLista de comandos: `!help <categoria>`\nComando en detalle: `!help <comando>`\n**» Enlaces útiles**\n[Website](https://discord.gg/NTvuDqt2R6) | [Privacidad](https://discord.gg/NTvuDqt2R6) | [Soporte](https://discord.gg/NTvuDqt2R6) | [Encuesta](https://discord.gg/NTvuDqt2R6)")
            .setColor(embed_info)
        // .setImage("https://media.discordapp.net/attachments/1010997170553495622/1010997217856860241/nekoshop.png")
        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('Help')
                    .setPlaceholder('Categorias')
                    .addOptions(
                        /*{
                            label: 'Inicio',
                            description: 'Muestra las diversas categorias y comandos',
                            value: 'first_option',
                            emoji: "<:LogoAlpha:1011490671586189392>",
                        },*/
                        {
                            label: 'Economy ',
                            description: 'Son todos los comandos referidos a economia',
                            value: 'second_option',
                            emoji: "<a:sn_money:1008254655832268850 ",
                        },/*
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
                        },*/
                    )
            )


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
