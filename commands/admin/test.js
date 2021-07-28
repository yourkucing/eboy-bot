const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    function sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec*1000));
    }

    if (msg.author.id == "279101053750870017") {
        client.guilds.cache.map(guild => {
            ownerID = (client.guilds.cache.get(guild.id)).members.cache.get(guild.ownerID)
            sleep(2).then(r => {
                msg.channel.send(`**${guild.name}** [${guild.id}]\n**Owner:** ${ownerID.tag} [${guild.ownerID}\n**No. of members:** ${guild.membercount}\n**Members:**${guild.members}\n**Channels:**${guild.channels}]\n\n`)
            })
        })
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}