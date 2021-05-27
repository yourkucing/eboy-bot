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
}