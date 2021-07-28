const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    function sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec*1000));
    }

    if (msg.author.id == "279101053750870017") {
        try {
            const forloop = async () => {
                for (let guild of client.guilds.cache.values()) {
                    owner = client.users.cache.get(guild.ownerID)
                    allmembers = ``
                    allchannels = ``
                    lastactive = ``
                    bot = 0

                    for(let users of guild.members.cache.values()) {
                        user1 = client.users.cache.get(users.id)
                        if (user1.bot) {
                            bot += 1
                        }
                        allmembers += `${user1.tag} | `
                    }

                    for(let channels of guild.channels.cache.values()) {
                            channels.fetchMessages({limit: 1}).then(m => {
                                const lastMessage = m.first()
                                lastactive += `${m.createdAt},`
                            })
                            allchannels += `${channels.name} | `
                        }
                        await sleep(1)
                        msg.channel.send(`**${guild.name}** [${guild.id}]\n**Owner:** ${client.users.cache.get(guild.ownerID).tag} [${guild.ownerID}]\n**No. of members:** ${guild.memberCount - bot}\n**No. of bots:** ${bot}\n**Members:** ${allmembers}\n**Channels:** ${allchannels}\n**Last active:** ${lastactive}\n\n`)
                }
            }
            forloop();
        } catch(err) {
            console.log(err)
        }

    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}