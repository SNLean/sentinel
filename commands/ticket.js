const { Interaction } = require("discord.js");
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")

module.exports = {
    name: "TICKET",
    alias: ["ticket"],
    description: "Revisas tu balance",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {

        const embed = new EmbedBuilder()
            .setTitle("**Tickets!**")
            .setDescription("Click in the buton to open a ticket")
            .setFooter({ text: ee.footertext, iconURL: ee.footericon })
            .setColor(ee.color)

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("b1")
                    .setStyle("SUCCESS")
                    .setLabel("Open")
                    .setEmoji("🎟")
            )

        msg.channel.send({ embeds: [embed], components: [row] })

        client.on("interactionCreate", async (interaction) => {
            if (interaction.isButton()) {
                if (interaction.customId === "b1") {
                    const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
                    interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                        type: "GUILD_TEXT",
                        permissionOverwrites: [
                            {
                                id: interaction.user.id,
                                allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                            },
                            {
                                id: everyone.id,
                                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                            }
                        ]
                    }).then(c => {
                        interaction.reply({ content: `The ticket has been created in <#${c.id}>!`, ephemeral: true })

                        const embedfinal = new EmbedBuilder()
                            .setTitle("New ticket has be created!")
                            .addField("Author:", `<@${msg.author.id}>`)
                            .setDescription("wait to a moderator!")
                            .setThumbnail(msg.author.displayAvatarURL())
                            .setTimestamp()
                            .setFooter({ text: ee.footertext, iconURL: ee.footericon })
                            .setColor(ee.color)

                        const close = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setCustomId("cb")
                                    .setStyle("DANGER")
                                    .setLabel("Close")
                                    .setEmoji("✖")
                            )

                        c.send({ embeds: [embedfinal], components: [close] })
                    })
                } else if (interaction.customId === "cb") {
                    try {
                        console.log('Funciona piola')
                        const embedclose = new EmbedBuilder()
                            .setDescription("Your ticket it will be deleted in a few minutes...")
                            .setFooter({ text: ee.footertext, iconURL: ee.footericon })
                            .setColor(ee.color)

                        interaction.reply({ embeds: [embedclose] })

                        setTimeout(() => {
                            interaction.channel.delete()
                        }, 5000)
                    } catch (err) {
                        console.log(err)
                    }
                }
            }
        })
    }
}