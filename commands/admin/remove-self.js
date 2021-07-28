const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    if (msg.author.id == "279101053750870017") {
        guildID = args[0]
        client.guilds.cache.get(guildID).leave().catch(err => {
            console.log(`there was an error leaving the guild: \n ${err.message}`);
            })
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}