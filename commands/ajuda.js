const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
`
>>> **meu prefixo é "w."**
**diga** (eu falo coisas),
**apagar/del** (deleto mensagens), 
**moeda** (cara ou coroa), 
**beijo** (vc beija alguem), 
**tempo** (a quanto tempo estou online?),
**soco** (vc soca alguem),
**ping** (ping do server),
**foto/ft** (vc pega a foto de alguem). 
**abraço** (vc abraça alguem)
**convite** (vc pega um link pra me convidar)
`,
`
>>> **meu prefixo é "w."**
**diga** (eu falo coisas),
**apagar/del** (deleto mensagens), 
**moeda** (cara ou coroa), 
**beijo** (vc beija alguem), 
**tempo** (a quanto tempo estou online?),
**soco** (vc soca alguem),
**ping** (ping do server),
**foto/ft** (vc pega a foto de alguem). 
**convite** (vc pega um link pra me convidar)
**abraço** (vc abraça alguem)
`
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**HELP**')
        .setURL('http://rotf.lol/wuuny')
        .setColor('#924443')
        .setDescription(rand)
  await message.author.send(embed);
  await message.channel.send("Veja seus dms! <a:HK_BunnyMoon:846517233895079967>");
}