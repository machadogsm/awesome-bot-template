const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  var array1 = ["cara", "coroa"];

  var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
    message.reply("bota cara ou coroa mlk");
  } 
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send("Deu **" + array1[rand] + "**, vc ganhou, boa!");
    message.channel.send("https://media1.tenor.com/images/80ac041afe23c04352471e12defb9da8/tenor.gif?itemid=6238123");
  } 
else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send("Deu **" + array1[rand] + "**, vc perdeu dessa vez!");
    message.channel.send("https://media1.tenor.com/images/80ac041afe23c04352471e12defb9da8/tenor.gif?itemid=6238123");
  }
};
