const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    if (msg.author.id == "279101053750870017") {
        guildID = client.guilds.cache.get(args[0])
        owner = client.users.cache.get(guildID.owner)
        allmembers = ``
        allchannels = ``
        bot = 0
        for(let users of guildID.members.cache.values()) {
            user1 = client.users.cache.get(users.id)
            if (user1.bot) {
                bot += 1
            }
            allmembers += `${user1.tag} | `
        }
        for(let channels of guildID.channels.cache.values()) {
            allchannels += `${channels.name} | `
        }
        msg.channel.send(`**${guildID.name}** [${args[0]}]\n**Owner:** ${owner.tag} [${guildID.owner}]\n**No. of members:** ${guildID.memberCount - bot}\n**No. of bots:** ${bot}\n**Members:** ${allmembers}\n**Channels:** ${allchannels}\n\n`)

    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}