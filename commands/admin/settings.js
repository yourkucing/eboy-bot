const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    hooman = msg.author
    console.log(msg.guild.members.cache.get(hooman.id))
    // if (hooman.permissions.has("ADMINISTRATOR")) {
    //     msg.channel.send("you got admin")
    // }
    // else {
    //     msg.channel.send("you dont got admin")
    // }
    
}