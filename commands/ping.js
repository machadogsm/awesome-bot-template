module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`🏓 **| Pong!**\nApi latency: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nApi latency: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};