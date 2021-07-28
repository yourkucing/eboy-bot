const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        console.log(client.guilds.cache.map(guild));
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}