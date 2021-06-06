const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'http://rotf.lol/wuuny',
  'https://discord.com/api/oauth2/authorize?client_id=814506396275834980&permissions=0&scope=bot',
  'https://bit.ly/3v2b576',
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('meu link de convite')
        .setColor('334b80') 
        .setURL(rand)
  await message.channel.send(embed);
}
