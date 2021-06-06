const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/7jErgl1.gif',
  'https://imgur.com/GsMjksq.gif',
  'https://imgur.com/g91XPGA.gif',
  'https://imgur.com/e4bi40y.gif',
  'https://imgur.com/hlqNBXp.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to ping someone to punch!');
}
/*
message.channel.send(`${message.author.username} **acaba de socar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Punch')
        .setColor('334b80') 
        .setDescription(`${message.author} just punched ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('punch punch punch')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
