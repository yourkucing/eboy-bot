const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        guildID = args[0]
        guild = client.guilds.cache.get(guildID)
        lastactive = ``
        let channels = guild.channels.cache.filter(m => m.type === 'text').array();
        for (let current of channels) {
            current.messages.fetch({limit: 1}).then(m => {
                const lastMessage = m.first()
                lastactive += `${lastMessage.createdAt},`
            })
            }
        msg.channel.send(lastactive)
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}