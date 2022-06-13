const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const reactionsModel = require('../../models/reactionsSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **react-settings** command in **${guild}** [${msg.guild.id}].`)

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
                msg.channel.send(`Please put in the channel in your command too like this: \`uwu react-settings #potatochannel\``)
                return
            }
            else {
                const channels = msg.mentions.channels.map(channel => {
                    return channel.id;
                })
                channelID = channels[0]
                chan = msg.guild.channels.cache.get(channelID)
                sendingmessage = `Please click on the following reactions to get your roles:\n`
                msg.channel.send(`Please key in the role:`)
                const filter = m => m.author.id == author;
                msg.channel.awaitMessages({filter, max: 1}).then(collected => {
                    rr = collected.first().mentions.roles.map(role => {
                        return role.id
                    })
                    roleID = rr[0]
                    msg.channel.send(`Please **react** to this message for the emoji that you want to use with the role stated above.`)
                    .then(message => {
                        const filter = (reaction, user) => {return reaction.emoji.name && user.id == author}
                        message.awaitReactions({filter, max: 1}).then(collected1 => {
                            const embed = new MessageEmbed()
                                .setColor(`#FF69B4`)
                                .setDescription(`Please react to one of the emojis to get the role.\nClick the reaction again to the role.`);
                            if (!collected1.first().emoji.id) {
                                react = collected1.first().emoji.name
                                embed.addField(`\n${react}: <@&${roleID}>`)
                            }
                            else {
                                react = collected1.first().emoji.id
                                embed.addField(`\n<:${collected1.first().emoji.name}:${react}>: <@&${roleID}>`)
                            }
                            chan.send({embeds: [embed]})
                        }).catch(e => {
                            console.log(e)
                        })
                    })
                })
                .catch(e => {
                        console.log(e)
                    });
                // const filter = m => m.author.id == author;
                // const collector = msg.channel.createMessageCollector({filter}
                //     );
        
                // role = []
                // reaction = []
                // for await (const m of collector) {
                //     if (m.content.toLowerCase() == "done") {
                //         collector.stop()
                //         msg.channel.send(`Oh, we're done? Goodbye!`)
                //     }
                //     else {
                //         const roles = m.mentions.roles.map(role => {
                //             return role.id
                //         })
                //         role.push(roles[0])
                //         rr = m.content.split(" ")
                //         sendingmessage += `\n${rr[1]} for <@&${roles[0]}>`
                //         if(rr[1].includes("<") && rr[1].includes(">") && rr[1].includes(":")){
                //             rr = rr[1].replace(/\s*\:.*?\:\s*/g, "")
                //             rr = rr.replace("<", "")
                //             rr = rr.replace(">", "")
                //             reactionEmoji = rr
                //         }
                //         else {
                //             reactionEmoji = rr[1]
                //         }
                //         reaction.push(reactionEmoji)
    
                //     }
                // }
                // channel.send(sendingmessage)
                // .then(async function(msg1) {
                //     try {
                //         for (let i = 0; i < reaction.length; i++) {
                //             await msg1.react(reaction[i])
                //             reactionsModel.create({
                //                 serverID: serverID,
                //                 channelID: channels[0],
                //                 messageID: msg1.id,
                //                 emoji: reaction[i],
                //                 role: role[i]
                //             }).catch(e => {console.log(e)})
                //         }
                //     }
                //     catch(err) {
                //         msg.channel.send(`\`There is an error in reacting to the message. Please delete the message that eboy sent and try again. If error persists, contact Maryam#9206.\``)
                //         console.log(err)
                //     }   
        //         })
             }
         }
    }
}