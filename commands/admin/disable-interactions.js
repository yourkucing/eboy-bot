const Discord = require('discord.js');
const serverModel = require('../../models/channelSchema');

module.exports.run = async(client, msg, args) => {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.channel.send("You don't have Administrator permissions to use this.")
        return
    }
    else {
        serverID = msg.channel.id
        serverModel.findOneAndDelete({
            channelID: serverID
        }).then(r => {
            if (r) {
                msg.react(`✅`)
            }
            else {
                msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
            }
        })
    }
    
}