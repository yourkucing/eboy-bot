const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    function sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec*1000));
    }

    if (msg.author.id == "279101053750870017") {
        client.guilds.cache.map(guild => {
            owner = client.users.cache.fetch(guild.ownerID)
            sleep(2).then(r => {
                allmembers = ``
                allchannels = ``
                guild.members.map(users => {
                    allmembers += `${users.tag} | `
                })
                guild.channels.map(channels => {
                    allchannels += `${channels.name} | `
                })
                msg.channel.send(`**${guild.name}** [${guild.id}]\n**Owner:** ${owner.tag} [${guild.ownerID}]\n**No. of members:** ${guild.memberCount}\n**Members:**${allmembers}\n**Channels:**${allchannels}]\n\n`)
            })
        })
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}