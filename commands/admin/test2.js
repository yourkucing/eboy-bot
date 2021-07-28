const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    function sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec*1000));
    }

    if (msg.author.id == "279101053750870017") {
        try {
            guilds = ``
            for (let guild of client.guilds.cache.values()) {
                guilds += `**${guild.name}** [${guild.id}]\n`
            }
            msg.channel.send(guilds)
        } catch(err) {
            console.log(err)
        }

    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}