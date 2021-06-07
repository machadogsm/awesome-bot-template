const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  if (!message.member.hasPermission("SEND_MESSAGES")) return message.reply('**Você não tem permissão para utilizar esse comando**')
  message.delete().catch(O_o => {});
      const embed = new Discord.MessageEmbed()
      .setColor('334b80') 
      .setDescription(sayMessage)
  message.channel.send(embed);
}
