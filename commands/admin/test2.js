const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    if (msg.author.id == "279101053750870017") {
        guildID = client.guilds.cache.get(args[0])
        owner = client.users.cache.get(guildID.ownerID)

        msg.channel.send(`**${guildID.name}** [${args[0]}]\n**Owner:** ${owner.tag} [${guildID.owner}]\n**No. of members:** ${guildID.memberCount}`)

    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}