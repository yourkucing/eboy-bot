const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    n = "no"
    const collector = msg.channel.createMessageCollector(
        m => m.author.id == "279101053750870017" && m.content == "CODE", {max: 10}
      );
    collector.on('collect', m => {
        msg.channel.send(`YOU GOT IT!`)
    });
    collector.on('end', collected => {
        msg.channel.send(`Time's up too bad!`)
    });
}