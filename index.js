const { Collection, Client, GatewayIntentBits, IntentsBitField, Discord, Partials } = require("discord.js");
const mongoose = require("mongoose");
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.MessageContent, new IntentsBitField(32767)] });

Array.prototype.count = function (valor) {
    return this.filter(x => x == valor).length;
};

client.commands = new Collection();
client.events = new Collection();

['commannd_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.token);