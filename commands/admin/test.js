const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        channelID = "865269025017954335"
        guildID = "865263454666489866"
        messageID = "869626800400121916"
        guild = client.guilds.cache.get(guildID)
        role = guild.roles.cache.get("867909386440433685")
        channel = client.channels.cache.get(channelID)
        const m = await channel.messages.fetch(messageID)
        console.log(m.content)

        let hehim = m.reactions.cache.find(emoji => emoji.name == "🐧")
        m.reactions.cache.map(async (reaction) => {
            if (reaction.emoji.name !== "🐧") return;
            let reactedUsers = await reaction.users.fetch();
            console.log(reactedUsers)
            reactedUsers.map((user) => {
                user.roles.add(role)
                console.log(`added to ${users.username}`)
            })

        })
        m.edit(`Please click on the following reactions to get your roles:\n\n🐌 for <@&867909305206308874>\n🐧 for <@&867909386440433685>\n🦑 for <@&867909438768558091>\n🦀 for <@&867909742968836146>`)
        m.react('🦀')
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}