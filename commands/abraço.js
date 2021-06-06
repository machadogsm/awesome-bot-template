const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/r9aU2xv.gif',
  'https://imgur.com/wOmoeF8.gif',
  'https://imgur.com/nrdYNtL.gif',
  'https://imgur.com/BPLqSJC.gif',
  'https://imgur.com/ntqYLGl.gif',
  'https://imgur.com/v47M1S4.gif',
  'https://imgur.com/82xVqUg.gif',
  'https://imgur.com/4oLIrwj.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se, marque alguem válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Hug')
        .setColor('#924443')
        .setDescription(`${message.author} abraçou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('hug hug hug')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
