const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (!msg.mentions.users.size) {
        msg.channel.send(`I'm not sure... who you wanted me to time out?`)
    }
    else if (!args[1]) {
        taggedUser = msg.mentions.members.first()
        msg.channel.send(`I will time ${taggedUser.displayName} out for the default time of 15 minutes. Uh-oh, what did you do? Well, see you later then!`)
        time = 15000
        if (!guild.roles.cache.find(x => x.name == "Time Out Corner")){
            guild.roles.create({
                data: {
                  name: 'Time Out Corner',
                  color: 'BLACK',
                },
                reason: 'to time people out',
              })
                .then(console.log)
                .catch(console.error);
        }
        taggedUser.roles.add(guild.roles.cache.find(x => x.name == "Time Out Corner"), "");
        
    }
}