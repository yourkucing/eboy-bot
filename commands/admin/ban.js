const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    const checkforTimeouts = async() => {
        console.log('checking for timeout expires....')
        const query = {
            timeout: {
                $lte: Date.now()
            }
        }
        const results = await timeoutModel.find(query)
        if (results) {
            for (const post of results) {
    
                userID = post.userID
                guildID = post.serverID
                channelID = post.channelID
                console.log(userID)
                const guild = client.guilds.cache.get(guildID)
                const channel = client.channels.cache.get(channelID)
                const timeoutrole = guild.roles.cache.find(role => role.name === "Time Out Corner")
                const user = guild.members.cache.get(userID)
                if (!user) {
                    continue
                }
                else {
                    console.log(user.nickname, channel.name, guild.name)
                    user.roles.remove(timeoutrole.id).catch((e) => {console.log(e)})
                    channel.send(`<@${userID}>, your timeout has ended!`)
                    
                    await timeoutModel.deleteOne({userID: userID, serverID: guildID, channelID: channelID})
                }
                
            }
        }
    
        setTimeout(checkforTimeouts, 1000 * 10)
    }

    checkforTimeouts().catch((err) => {
		console.log(err)
	})
    
}