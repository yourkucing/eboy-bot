const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        channelID = "865269025017954335"
        guildID = "865263454666489866"
        messageID = "869626800400121916"
        guild = client.guilds.cache.get(guildID)
        role = guild.roles.cache.get("867909438768558091")
        channel = client.channels.cache.get(channelID)
        const m = await channel.messages.fetch(messageID)

        let hehim = m.reactions.cache.find(emoji => emoji.name == "🦑")
        m.reactions.cache.map(async (reaction) => {
            if (reaction.emoji.name !== "🐧") return;
            let reactedUsers = await reaction.users.fetch();
            reactedUsers.map((user) => {
                if (!user.bot) {
                    users = guild.members.cache.get(user.id)
                    users.roles.add(role)
                    console.log(`added to ${user.username}`)
                }
            })

        })
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}