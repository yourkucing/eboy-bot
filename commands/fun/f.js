const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = msg.guild.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **f** command.`)

    if (!msg.mentions.users.size) {
        const words = args.join(' ');
            if (words === "") {
                msg.channel.send(`Press :regional_indicator_f: to pay your respects.`)
                .then(async function(msg) {
                    await msg.react('🇫')    

                    const filter = (reaction, user) => {
                        return reaction.emoji.name === '🇫' && !user.bot;
                    };

                    const collector = msg.createReactionCollector(filter, { time: 15000 });

                    collector.on('collect', (reaction, user) => {
                        msg.channel.send(`**${user.username}** has paid their respects.`)
                    });

                    collector.on('end', collected => {
                         count = collected.get('🇫') ? collected.get('🇫').count : 0
                        if (count === 0) {
                            msg.channel.send(`No users paid their respects. What a shame.`);                   
                        } 
                        else {
                            msg.channel.send(`**${count-1}** users paid their respects.`);
                        }
                            });
                });
            }
            else {
                msg.channel.send(`Press :regional_indicator_f: to pay your respects to **${words}**.`)
                .then(async function(msg) {
                    await msg.react('🇫')    

                    const filter = (reaction, user) => {
                        return reaction.emoji.name === '🇫' && !user.bot;
                    };

                    const collector = msg.createReactionCollector(filter, { time: 15000 });

                    collector.on('collect', (reaction, user) => {
                        msg.channel.send(`**${user.username}** has paid their respects.`)
                    });

                    collector.on('end', collected => {
                         count = collected.get('🇫') ? collected.get('🇫').count : 0
                        if (count === 0) {
                            msg.channel.send(`No users paid their respects to **${words}**. What a shame.`);                 
                        } 
                        else {
                            msg.channel.send(`**${count-1}** users paid their respects to **${words}**.`);
                        }
                    });
                });
            }   
    }
    else {
		const taggedUser = msg.mentions.members.first();
        msg.channel.send(`Press :regional_indicator_f: to pay your respects to **${taggedUser.displayName}**.`)
        .then(async function(msg) {
            await msg.react('🇫')    

            const filter = (reaction, user) => {
                return reaction.emoji.name === '🇫' && !user.bot;
            };

            const collector = msg.createReactionCollector(filter, { time: 15000 });

            collector.on('collect', (reaction, user) => {
                msg.channel.send(`**${user.username}** has paid their respects.`)
            });

            collector.on('end', collected => {
                         count = collected.get('🇫') ? collected.get('🇫').count : 0
                        if (count === 0) {
                            msg.channel.send(`No users paid their respects to **${taggedUser.displayName}**. What a shame.`);                 
                        } 
                        else {
                            msg.channel.send(`**${count-1}** users paid their respects to **${taggedUser.displayName}**.`);
                        }

            });
        });
    }
}