const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        channelID = "865269025017954335"
        guildID = "865263454666489866"
        messageID = "869626800400121916"
        channel = client.channels.cache.get(channelID)
        channel.messages.fetch(messageID).then(m => {
            console.log(m.content)
            console.log(m.reactions)
            // m.edit(`Please click on the following reactions to get your roles:\n\n🐌 for <@&867909305206308874>\n🐧 for <@&867909386440433685>\n🦑 for <@&867909438768558091>\n🦀 for <@&867909742968836146>`)
            // m.react('🦀')
        })
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}