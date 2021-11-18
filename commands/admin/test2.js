const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    if (msg.author.id == "279101053750870017") {
        client.guilds.cache.forEach(guild => console.log(guild.ownerID));
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}