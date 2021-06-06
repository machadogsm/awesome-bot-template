const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} days\n🗓️ ${hours.toFixed()} hours\n🗓️ ${minutes.toFixed()} minutes\n🗓️ ${seconds.toFixed()} seconds`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Activity time: 🕰️`)
    .setThumbnail("https://imgur.com/WZMylbw.gif")
    .setColor('334b80') 
    .setDescription(`**I'm online for:**\n${uptime}`)

  message.channel.send(embed);
};
