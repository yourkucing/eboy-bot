const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    hooman = msg.author
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.channel.send("you dont got admin")
    }
    else {
        msg.channel.send("you got admin")
    }
    
}