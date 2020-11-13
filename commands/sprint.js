const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (args == "role") {
        member = msg.member
        role = msg.guild.roles.cache.find(x => x.id == "776722239533219870")
        member.roles.add(role)
        msg.channel.send(`hi ${msg.author.toString()} uwu! I have added you to the **sprinters** role uwu :3 NOW WRITE WRITE WRITE~`)
    }
    else {
        time =  parseFloat(args) * 60 * 1000
        if (isNaN(time)) {
            msg.channel.send(`Nani the fuck is "uwu sprint ${args}"?`)
        }
        else {
            msg.channel.send(`<@&776722239533219870>! Writing sprint for ${args} minutes starts now!`)
            setTimeout(() => {
              msg.channel.send(`<@&776722239533219870>! Writing sprint is up!`);
            }, time);
        }
    }
}