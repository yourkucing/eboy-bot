const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    if (msg.author.id == "279101053750870017") {
        guild = client.guilds.cache.get('863583099388690432')
        console.log(guild.available)
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}