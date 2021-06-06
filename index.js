//               wuuny*

//              Constants

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const Constants = require('./node_modules/discord.js/src/util/Constants.js');
Constants.DefaultOptions.ws.properties.$browser = 'Discord iOS';
const express = require('express');

//              Ping

const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);


//              Command File + Command error

var list = [
  'https://i.imgur.com/sho7ThP.gif',
  'https://i.imgur.com/mKohsux.gif',
  'https://ptanime.com/wp-content/uploads/2016/06/Ao-no-Exorcist-anime-2011-rin-sparkle.gif',
  'https://1.bp.blogspot.com/-JjF7LnrQblk/WHJVrTsrJEI/AAAAAAAACpk/e3NZQAbbya4Lp2ANmPOgznDhOaoBDaisACLcB/s1600/ce053557f69bf862242b4762984b4d5f.gif',
  'https://i.gifer.com/XEmA.gif',
  'https://i.pinimg.com/originals/29/f7/14/29f7141a35193b3fe95e241dd9878f52.gif',
  'https://i.gifer.com/PtJ0.gif',
  'https://media.tumblr.com/tumblr_lpvtuwO1OX1qedhpm.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
      console.log ('Eita!')
    const errembed = new Discord.MessageEmbed()  // Error Embed        
    .setColor('334b80')
    .setDescription(`${message.author}, O comando informado nao existe ou ainda nao foi adcionado, se isso for um erro chame por <@477641226829692932> \nUtilize **w.help** para saber meus comandos.`)
    .setImage(rand)
    return message.channel.send(errembed);
  }
});


//              Status

client.on("ready", () => {
  let activities = [
      `${config.prefix}help`,
      `w.help`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 1000 * 10); 
console.log("Estou Online!")
});


//              End.

client.login(process.env.TOKEN);