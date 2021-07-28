const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        channelID = args[0]
        channel = client.channels.cache.get(channelID)
        lastactive = ``
        channel.fetchMessages({limit: 1}).then(m => {
            const lastMessage = m.first()
            lastactive += `${m.createdAt},`
        })
        msg.channel.send(lastactive)
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}