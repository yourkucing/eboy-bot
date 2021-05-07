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
            try {
                msg.guild.roles.create({
                    data: {
                      name: 'Time Out Corner',
                      color: 'BLACK',
                      hoist:  true,
                      position: highest-1
                    },
                    reason: 'to time people out',
                  }).then(r => taggedUser.roles.add(r))
            } catch(err) {
                console.log(err)
            }
        }
        
    }
}