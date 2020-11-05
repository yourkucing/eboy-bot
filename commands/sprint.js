const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (args === "role") {
        member = msg.author
        role = msg.guild.roles.cache.find(x => x.id == "773848625989156879")
        member.roles.add(role)
    }
    time =  parseFloat(args) * 60 * 1000
    msg.channel.send(`Writing sprint for ${time} minutes starts now!`)
    setTimeout(() => {
      msg.channel.send('Testing with this');
    }, time);
}