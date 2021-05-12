const Discord = require('discord.js');
const timeoutModel = require('./models/timeoutSchema');

module.exports.run = async(client, msg, args) => {
    if (msg.author.hasPermission("ADMINISTRATOR")) {
        if (!msg.mentions.users.size) {
            msg.channel.send(`Uh... Do I remove the role of the server's ghost? o.o`)
            return
        }
        else {
            const taggedUser = msg.mentions.members.first();
            timeout = await findOne({userID: taggedUser.id, serverID: msg.guild.id})
            if (timeout) {
                const timeoutrole = msg.guild.roles.cache.find(role => role.name === "Time Out Corner")
                const channel = client.channels.cache.get(channelID)
                taggedUser.roles.remove(timeoutrole.id).catch((e) => {console.log(e)})
			    channel.send(`<@${taggedUser.id}>, your timeout has ended!`)
                timeoutModel.deleteOne({userID: taggedUser.id, serverID: msg.guild.id}).then(r => {
                    if (r) {
                        console.log(`Success deletion!`)
                    }
                    else {
                        console.log(`Error in deletion from timeout db.`)
                    }
                })
            }

        }
    }
    else {
        msg.channel.send("You do not have admin rights to use this.")
    }
    
}