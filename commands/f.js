const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
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
                        if (typeof collected.get('🇫') === "undefined")
                            msg.channel.send(`No users paid their respects. What a shame.`);
                            msg.channel.send("`Author's Note: Also Noa is still a dumdum. That's the real F.`");                    
                        } 
                        else {
                            count = collected.get('🇫').count
                            msg.channel.send(`**${count-1}** users paid their respects.`);
                            msg.channel.send("`Author's Note: Also Noa is still a dumdum. That's the real F.`");
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
                if (typeof collected.get('🇫') === "undefined") {
                    msg.channel.send(`No users paid their respects to **${words}**. What a shame.`);
                    msg.channel.send("`Author's Note: Also Noa is still a dumdum. That's the real F.`");                    
                } 
                else {
                    count = collected.get('🇫').count
                    msg.channel.send(`**${count-1}** users paid their respects to **${words}**.`);
                    msg.channel.send("`Author's Note: Also Noa is still a dumdum. That's the real F.`");
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
                if (typeof collected.get('🇫') === "undefined") {
                    msg.channel.send(`No users paid their respects to **${taggedUser.displayName}**. What a shame.`);
                    msg.channel.send("`Author's Note: Also Noa is still a dumdum. That's the real F.`");                    
                } 
                else {
                    count = collected.get('🇫').count
                    msg.channel.send(`**${count-1}** users paid their respects to **${taggedUser.displayName}**.`);
                    msg.channel.send("`Author's Note: Also Noa is still a dumdum. That's the real F.`");
                }

            });
        });
    }
}