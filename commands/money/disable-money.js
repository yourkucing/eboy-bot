const channelModel = require('../../models/channelSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **disable-money** command.`)

    if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.channel.send("You don't have Administrator permissions to use this.")
        return
    }
    else {
        channelID = msg.channel.id
        channelModel.findOneAndDelete({
            channelID: channelID
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