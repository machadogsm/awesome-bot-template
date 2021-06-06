const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  var array1 = ["heads", "tails"];

  var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() !== "heads" && args[0].toLowerCase() !== "tails")) {
    message.reply("remember to insert heads or tails after the command");
  } 
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send("It's **" + array1[rand] + "**, you've won this time, congrats!");
    message.channel.send("https://media1.tenor.com/images/80ac041afe23c04352471e12defb9da8/tenor.gif?itemid=6238123");
  } 
else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send("It's **" + array1[rand] + "**, you've lost this time, loser!");
    message.channel.send("https://media1.tenor.com/images/80ac041afe23c04352471e12defb9da8/tenor.gif?itemid=6238123");  
  }
};
