const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "vc nn tem a permissão `Manage messages` otario"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 100)
    return message.reply(
      "só 1-100 mano"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens limpas no chat!**`).then(msg => msg.delete({timeout: 100}))
    .catch(error =>
      console.log(`erro: ${error}`)
    );
};
