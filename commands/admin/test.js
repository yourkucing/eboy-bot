const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        msg.channel.send(client.guilds.cache.map(guild => {
            ownerID = client.users.cache.get(guild.ownerID)
            `**${guild.name}** [${guild.id}]\n**Owner:** ${ownerID.tag} [${guild.ownerID}\n**No. of members:** ${guild.membercount}\n**Members:**${guild.members}\n**Channels:**${guild.channels}]\n\n`
        }));
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}