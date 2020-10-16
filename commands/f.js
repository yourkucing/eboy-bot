const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const filter = (reaction, user) => {
        return reaction.emoji.name === `:regional_indicator_f:` && user.id === message.author.id;
    };

    const collector = message.createReactionCollector(filter, { time: 15000 });

    collector.on('collect', (reaction, user) => {
        console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
    });

    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });
}