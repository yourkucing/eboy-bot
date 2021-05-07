const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (!msg.mentions.users.size) {
        msg.channel.send(`I'm not sure... who you wanted me to time out?`)
    }
    else if (!args[1]) {
        taggedUser = msg.mentions.members.first()
        msg.channel.send(`I will time ${taggedUser.displayName} out for the default time of 15 minutes. Uh-oh, what did you do? Well, see you later then!`)
        time = 15000
        if (!msg.guild.roles.cache.find(x => x.name == "Time Out Corner")){
            highest = msg.guild.roles.highest.position
            bothighest = msg.guild.me.roles.highest.position
            console.log(highest)
            console.log(bothighest)
            const timeout = await msg.guild.roles.create({
                data: {
                    name: 'Time Out Corner',
                    color: 'BLACK',
                    hoist:  true,
                    position: bothighest-1
                },
                reason: 'to time people out',
                }).catch((err) => console.error(err))

            taggedUser.roles.add(timeout).then(
                () => {
                    msg.channel.send(`${taggedUser.displayName} has been timed out for 15 minutes (default time). Shame on you!`)
                }
            ).catch((err) => console.error(err))
        }
        else {
            taggedUser.roles.add(msg.guild.roles.cache.find(x => x.name == "Time Out Corner"), "");
        }
        
    }
}