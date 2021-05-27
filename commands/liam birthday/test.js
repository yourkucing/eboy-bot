const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const collector = msg.channel.createMessageCollector(
        m => m.author.id == "279101053750870017", {max: 10}
      );
    collector.on('collect', m => {
        if(m.content == "CODE") {
            msg.channel.send(`YOU GOT IT!`)
            collector.stop()
        }
    });
    collector.on('end', collected => {
        msg.channel.send(`Time's up too bad!`)
    });
}