const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const reactionsModel = require('../../models/reactionsSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **react-settings** command in **${guild}** [${msg.guild.id}].`)

    if (!msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        msg.channel.send("You don't have Administrator permissions to use this.")
        return
    }
    else {
        author = msg.author.id
        serverID = msg.guild.id
        if (!args || args.length == 0) {
            msg.channel.send(`Please put in the channel in your command too like this: \`uwu react-settings #potatochannel\``)
            return
        }
        else {
            const channels = msg.mentions.channels.map(channel => {
                return channel.id;
            })
            channel = msg.guild.channels.cache.get(channels[0])
            sendingmessage = `Please click on the following reactions to get your roles:\n`
            msg.channel.send(`Please tag the role that you want as well as the emoji: (Eg. @potatokids :heart:)\nKeep replying continuously and when you're done, reply with "done".`)
            const filter = m => m.author.id == author;
            const collector = msg.channel.createMessageCollector({filter}
                );
    
            role = []
            reaction = []
            for await (const m of collector) {
                if (m.content.toLowerCase() == "done") {
                    collector.stop()
                    msg.channel.send(`Oh, we're done? Goodbye!`)
                }
                else {
                    const roles = m.mentions.roles.map(role => {
                        return role.id
                    })
                    role.push(roles[0])
                    rr = m.content.split(" ")
                    reaction.push(rr[1])
                    sendingmessage += `\n${rr[1]} for <@&${roles[0]}>`
                }
            }
            channel.send(sendingmessage)
            .then(async function(msg1) {
                try {
                    for (let i = 0; i < reaction.length; i++) {
                        roleID = role[i]
                        if (reaction[i].includes("<") && reaction[i].includes(">") && reaction[i].includes(":")) {
                            rr = reaction[i].replace(/\s*\:.*?\:\s*/g, "")
                            rr = rr.replace("<", "")
                            rr = rr.replace(">", "")
                            reactionEmoji = rr
                        }
                        else {
                            reactionEmoji = reaction[i]
                        }
                        await msg1.react(reactionEmoji)
                        .then(a => {
                            reactionsModel.create({
                            serverID: serverID,
                            channelID: channels[0],
                            messageID: msg1.id,
                            emoji: reactionEmoji,
                            role: roleID
                        })
                    })
                    }
    
                }
                catch(err) {
                    msg.channel.send(`**ERROR:** \`Eboy cannot seem to find your emoji or role.\`\nPlease make sure that you have keyed in both the role as well as the emoji correctly. Note that you can use custom emojis too, but not Nitro moving emojis. If you're still having trouble, you can DM my owner: Maryam#9206\n\nPlease note that every time you want to restart, you should delete the reaction message that eboy had sent out.`)
                    console.log(err)
                }   
            })
        }
    }
}