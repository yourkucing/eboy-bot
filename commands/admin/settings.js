const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    hooman = msg.author
    msg.channel.send(hooman)
    // if (hooman.permissions.has("ADMINISTRATOR")) {
    //     msg.channel.send("you got admin")
    // }
    // else {
    //     msg.channel.send("you dont got admin")
    // }
    
}