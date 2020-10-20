const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    msg.channel.send(`Noa is a dumdum.`)
    .then(async function(msg) {
        await msg.react('🇫')    

        const filter = (reaction, user) => {
            return reaction.emoji.name === '🇫' && user.id === msg.author.id;
        };

        const collector = msg.createReactionCollector(filter, { time: 15000 });

        collector.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
    });
}