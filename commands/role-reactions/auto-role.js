const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const autoroleModels = require('../../models/autoroleSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **auto-role** command in **${guild}** [${msg.guild.id}].`)

    if (!msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        msg.channel.send("You don't have Administrator permissions to use this.")
        return
    }
    else {
        author = msg.author.id
        serverID = msg.guild.id
        if (!args || args.length == 0) {
            msg.channel.send(`Please put in the role in your command too like this: \`uwu auto-role @theroleyouwant\` or you can use \`uwu auto-role delete\` to delete the current role that was previously chosen.`)
            return
        }
        else if (args[0] == "delete"){
            autoroleModels.findOneAndDelete({serverID: serverID}).then(found => {
                if (found) {
                    msg.react(`✅`)
                }
                else {
                    msg.channel.send(`\`There do not seem to be any role that was assigned as an auto-role for this server.\``)
                    return
                }
            })
            }
        else {
            roleID = msg.mentions.roles.map(role => {
                return role.id
            })
            autoroleModels.create({
                serverID: serverID,
                roleID: roleID[0]
            }).then(created => {
                if (created) {
                    msg.react(`✅`)
                }
                else {
                    eboylog.send(`<@279101053750870017> **ERROR:** Eboy has trouble with **disable-interactions**. [server ID: ${serverID}]`)
                    msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)    
                }
                
            })
        }
    }
}