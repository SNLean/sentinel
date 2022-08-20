const voiceDiscord = require('@discordjs/voice');
const { prefix } = require(".././configs/config.json")
const { embed_info, embed_succes, embed_error } = require(".././configs/embeds.json")

const sounds = require(".././models/sounds")

module.exports = {
    name: "AUDIO",
    alias: ["audio"],
    description: "Reproduce un audio",
    async execute(client, msg, args, cmd, Discord, invData, EmbedBuilder, cdData) {
        if (!args[0]) return msg.channel.send("Falta un argumento")
        let soundData = await sounds.findOne({ guildID: msg.guild.id, name: args[0] })
        let soundsData = await sounds.findOne({ guildID: msg.guild.id, name: args[1] })
        let mensajea = "Intentna usar: `" + prefix + "audio add <nombre> <URL>`"
        let mensajer = "Intentna usar: `" + prefix + "audio remove <nombre>`"
        if (args[0] === "add") {
            if (!args[1] || !args[2]) return msg.channel.send(mensajea)
            if (!soundData) {
                let soundss = await sounds.create({
                    guildID: msg.guild.id,
                    userID: msg.author.id,
                    name: args[1],
                    url: args[2]
                })
                soundss.save()
                msg.channel.send("Audio registrado!")
            } else {
                msg.channel.send("Existe un audio con este nombre")
            }
        } else if (args[0] === "remove") {
            if (!args[1]) return msg.channel.send(mensajer)
            if (soundsData.userID !== msg.authorid) return msg.channel.send("Solo el dueño del audio lo puede borrar")

                if (soundsData) {
                    let pepe = await sounds.deleteOne({
                        guildID: soundsData.guildID,
                        userID: msg.author.id,
                        name: soundsData.name,
                        url: soundsData.url
                    })
                    msg.channel.send("Audio eliminnado")
                } else {
                    msg.channel.send("No existe este audio")
                }
        } else if (!soundData) {
            return msg.channel.send("Este audio no existe")
        } else {
            let mono = soundData.url
            const channel = msg.member.voice.channel;
            //let channel = client.channels.cache.get("1010249960572338256")
            if (!channel) return msg.channel.send('Bro join a voice channel smh :wink:');

            const resource = voiceDiscord.createAudioResource(mono);
            const player = voiceDiscord.createAudioPlayer();

            const connection = voiceDiscord.joinVoiceChannel({
                channelId: channel.id,
                guildId: msg.guild.id,
                adapterCreator: msg.guild.voiceAdapterCreator,
            });

            player.play(resource);
            connection.subscribe(player);

            player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
                connection.destroy();
            });
        }
    }
}

