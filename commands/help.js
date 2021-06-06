const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
`
> **ENGLISH:**

**my prefix is "w."**
**say** (say things),
**purge** (delete messages), 
**coin** (heads or tails), 
**kiss** (you kiss someone), 
**uptime** (how long have I been online?),
**punch** (you punch someone),
**ping** (server lantency),
**avatar/av/pfp** (you get somebody's avatar). 
**hug** (you hug someone)
**invite** (u get my invite link)

> **PORTUGUES:**

**meu prefixo é "w."**
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
> **ENGLISH:**

**my prefix is "w." **
**say** (say things),
**purge** (delete messages), 
**coin** (heads or tails), 
**kiss** (you kiss someone), 
**uptime** (how long have I been online?),
**punch** (you punch someone),
**ping** (server lantency),
**avatar/av/pfp** (you get somebody's avatar). 
**hug** (you hug someone)
**invite** (u get my invite link)

> **PORTUGUES:**

**meu prefixo é "w." **
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
`
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**HELP**')
        .setColor('334b80') 
        .setDescription(rand)
        .setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4949abb5-296f-4c8b-a421-a301f6a3e3c3/dbal8na-3d1609c5-a655-442e-925b-c0a074f2a5b7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5NDlhYmI1LTI5NmYtNGM4Yi1hNDIxLWEzMDFmNmEzZTNjM1wvZGJhbDhuYS0zZDE2MDljNS1hNjU1LTQ0MmUtOTI1Yi1jMGEwNzRmMmE1YjcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tUvzqOJ0bpjFW3VZeluFKVEBcpHEOBP6bUtC4d1Ijek')
  await message.author.send(embed);
  await message.channel.send("Check your dms! <a:HK_BunnyMoon:846517233895079967>");
}
