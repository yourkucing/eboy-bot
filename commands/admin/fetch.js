const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        guildID = args[0]
        guild = client.guilds.cache.get(guildID)
        lastactive = ``
        for(let channels of guild.channels.cache.values()) {
            channels.messages.fetch({limit: 1}).then(m => {
                const lastMessage = m.first()
                lastactive += `${m.createdAt},`
            })
        }
        msg.channel.send(lastactive)
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}