require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

console.log(client)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'plan') {
    msg.reply('Allez balance le planning');
  }
});

client.login(process.env.TOKEN);