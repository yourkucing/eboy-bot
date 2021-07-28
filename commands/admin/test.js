const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    function sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec*1000));
    }

    if (msg.author.id == "279101053750870017") {
        try {
            client.guilds.cache.map(guild => {
                if (guild.id == "719491348713046057" || guild.id == "776281759460360202") {
                    owner = client.users.cache.get(guild.ownerID)
                    allmembers = ``
                    allchannels = ``
                    bot = 0
                    guild.members.cache.map(users => {
                        user1 = client.users.cache.get(users.id)
                        if (user1.bot) {
                            bot += bot
                        }
                        allmembers += `${users.tag} | `
                    }).then(a => {
                        guild.channels.cache.map(channels => {
                            allchannels += `${channels.name} | `
                        }).then(b => {
                            sleep(1).then(r => {
                                msg.channel.send(`**${guild.name}** [${guild.id}]\n**Owner:** ${owner.tag} [${guild.ownerID}]\n**No. of members:** ${guild.memberCount - bot}\n**No. of bots:** ${bot}\n**Members:** ${allmembers}\n**Channels:** ${allchannels}\n\n`)
                            })
                        })
                    })
                }
        })
        } catch(err) {
            console.log(err)
        }

    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}