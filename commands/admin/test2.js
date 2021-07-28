const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    if (msg.author.id == "279101053750870017") {
        try {
            const forloop = async () => {
                L = ``
                for (let guild of client.guilds.cache.values()) {
                        L += `**${guild.name}** [${guild.id}]\n`
                }
            }
            forloop();
            msg.channel.send(L)
        } catch(err) {
            console.log(err)
        }

    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}