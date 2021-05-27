const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.channel.id == "847316136433025045" && msg.author.id == "279101053750870017") {
        msg.channel.send(`Oh, let's go to another surprise (click on the emoji whenever you're ready)! I hope you're having fun because I sure am. :heart:`).then(msg => {
            msg.react('🥳').then(message => {
                const birthdayFilter = (reaction, user) => {
                    return reaction.emoji.name === '🥳' && !user.bot;
                };
                const birthday = msg.createReactionCollector(birthdayFilter);
                birthday.on('collect', (reaction, user) => {
                    if (user.id == "279101053750870017") {
                        const birthdayboy = tempguild.members.cache.get(user.id)
                        birthdayboy.roles.add(tempguild.roles.cache.find(x => x.id == "847345544317763615"), "")
                    }
                })
            })
        })
    }
    if (msg.channel.id == "847317245058088990" && msg.author.id == "279101053750870017") {
        msg.channel.send(`Oh, let's go to another surprise (click on the emoji whenever you're ready)! Are you crying already? Please don't cry, not yet, no sir. We have more to go through. :heart:`).then(msg => {
            msg.react('🥳').then(message => {
                const birthdayFilter = (reaction, user) => {
                    return reaction.emoji.name === '🥳' && !user.bot;
                };
                const birthday = msg.createReactionCollector(birthdayFilter);
                birthday.on('collect', (reaction, user) => {
                    if (user.id == "279101053750870017") {
                        const birthdayboy = tempguild.members.cache.get(user.id)
                        birthdayboy.roles.add(tempguild.roles.cache.find(x => x.id == "847345578298834975"), "")
                    }
                })
            })
        })
    }
}