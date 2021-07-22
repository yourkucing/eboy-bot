const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        
        const guild = client.guilds.cache.get(args[2])
        const channel = client.channels.cache.get(args[1])
        const timeoutrole = guild.roles.cache.find(role => role.name === "Time Out Corner")
        const user = guild.members.cache.get(args[0])

        if (!guild) {
            console.log('No guild')
            return
        }
        if (!channel) {
            console.log('No channel')
            return
        }
        if(!user) {
            console.log('No user')
            return
        }
        
        user.roles.remove(timeoutrole.id).catch((e) => {console.log(e)}).then(r => {
            if (r) {
                channel.send(`<@${user.id}>, your timeout has ended!`)
            }
            else {
                console.log(`Something went wrong`)
            }
        })
    }
    else {
        msg.channel.send("You do not have admin rights to use this.")
    }
    
}