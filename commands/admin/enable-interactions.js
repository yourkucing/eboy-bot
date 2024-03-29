const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const serverModel = require('../../models/channelSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **enable-interactions** command in **${guild}** [${msg.guild.id}].`)

    if (!msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        msg.channel.send("You don't have Administrator permissions to use this.")
        return
    }
    else {
        serverID = msg.guild.id
        serverModel.create({
            channelID: serverID
        }).then(r => {
            if (r) {
                msg.react(`✅`)
            }
            else {
                eboylog.send(`<@279101053750870017> **ERROR:** Eboy has trouble with **enable-interactions**. [server ID: ${serverID}]`)
                msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
            }
        })
    }
    
}