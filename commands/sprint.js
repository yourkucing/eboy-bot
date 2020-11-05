const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (args == "role") {
        member = msg.member
        role = msg.guild.roles.cache.find(x => x.id == "773848625989156879")
        member.roles.add(role)
        msg.channel.send(`hi ${msg.author.toString()} uwu! I have added you to the **sprinters** role uwu :3 NOW WRITE WRITE WRITE~`)
    }
    else {
        time =  parseFloat(args) * 60 * 1000
        if (isNaN(time)) {
            msg.channel.send(`Nani the fuck is "uwu sprint ${args}"?`)
        }
        else {
            sprinters = []
            msg.channel.send(`Writing sprint for ${time} minutes starts in 1 minute. Press :notepad_spiral: to join the sprint!`)
            .then(async function(msg) {
                await msg.react('🗒️')
                const filter = (reaction, user) => {
                    return reaction.emoji.name === '🗒️' && !user.bot;
                };

                const collector = msg.createReactionCollector(filter, { time: 60000 });

                collector.on('collect', (reaction, user) => {
                    sprinters.push(user)
                    msg.channel.send(`**${user.username}** has joined the writing sprint.`)
                    role = msg.guild.roles.cache.find(x => x.id == "773848625989156879")
                    user.roles.add(role)
                });

                collector.on('end', collected => {
                     count = collected.get('🗒️') ? collected.get('🗒️').count : 0
                     msg.channel.send(`**${count-1}** users are taking part in the sprint. Ready?`);
                        });
            });
            msg.channel.send(`${773848625989156879}>! Writing sprint for ${time} minutes starts now!`)
            setTimeout(() => {
              msg.channel.send('Testing with this');
            }, time);
            for (i = 0; i < sprinters.length; i++) {
                member = users[i]
                member.removeRole(msg.guild.roles.cache.find(x => x.id == "773848625989156879"))
            }
        }
    }
}