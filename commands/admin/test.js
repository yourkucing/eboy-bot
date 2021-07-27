const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        channelID = "719493404190572604"
        guildID = "719491348713046057"
        messageID = "869630102294626374"
        channel = client.channels.cache.get(channelID)
        channel.messages.fetch("701574160211771462").then(msg => {
            msg.edit(`New content!`)
            msg.react('🦀')
        })
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}