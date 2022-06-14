const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const reactionsModel = require('../../models/reactionsSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **react-edit** command in **${guild}** [${msg.guild.id}].`)

    if (author.id != "279101053750870017") {
        msg.channel.send(`\`This command is currently under construction as it has been buggy for the past few months. But if you have a message that was generated by this command and it worked fine, it will keep on working fine.\``)
    }
    else {
        if (!msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            msg.channel.send("You don't have Administrator permissions to use this.")
            return
        }
        else {
            author = msg.author.id
            serverID = msg.guild.id
            if (!args || args.length == 0) {
                msg.channel.send(`Please put in the channel that has the react-message you want to edit: \`uwu react-edit #potatochannel\``)
                return
            }
            else {
                const channels = msg.mentions.channels.map(channel => {
                    return channel.id;
                })
                chanID = channels[0]
                chan = msg.guild.channels.cache.get(chanID)
                
                findMessage = await reactionsModel.distinct(messageID, {serverID: serverID, channelID: chanID})
                if (!findMessage || findMessage.length == 0) {
                    msg.channel.send(`\`There are no role reaction messages that were generated by eboy in that channel. Please try again or use uwu react-settings #potatochannel to create a new react-message.\``)
                    return
                }
                else {
                    for (x in findMessage){
                        msg.channel.send(findMessage[x].role)
                    }
                }
             }
         }
    }
}