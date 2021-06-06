const Discord = require('discord.js');

exports.run = async (client, message, args) => {


let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
        .setUrl('https://cdn.discordapp.com/attachments/433154821483134976/821569015024451624/video0_8.mp4')
        .setImage('https://cdn.discordapp.com/attachments/433154821483134976/821569015024451624/video0_8.mp4')
        .setColor('334b80') 
        .setDescription('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
  await message.channel.send(embed);
};
