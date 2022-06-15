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
            chanID = channels[0]
            chan = msg.guild.channels.cache.get(chanID)
            sendingmessage = ``
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
                            sendingmessage += `\n${react} for <@&${roleID}>`
                            embed.addFields({name: `Role Reactions`, value: sendingmessage})
                        }
                        else {
                            react = collected1.first().emoji.id
                            sendingmessage += `\n<:${collected1.first().emoji.name}:${react}> for <@&${roleID}>`
                            embed.addFields({name: `Role Reactions`, value: sendingmessage})
                        }
                        chan.send({embeds: [embed]}).then(msg1 => {
                            msg1.react(react)
                            msgID = msg1.id
                            async function savetomongo(){
                                let created = await reactionsModel.create({
                                    serverID: serverID,
                                    channelID: chanID,
                                    messageID: msgID,
                                    emoji: react,
                                    role: roleID
                                })
                                if (!created) {
                                    msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                                }
                            }
                            savetomongo()
                            msg.channel.send(`Do you want to add another role reaction? Reply \`yes\` or \`no\`.`).then(reply1 => {
                            num = 0
                            async function askingqquestion(){
                                while (num == 0) {
                                    const filter = m => m.author.id == author
                                    let collected = await msg.channel.awaitMessages({filter, max: 1})
                                        if (collected.first().content.toLowerCase() == "no") {
                                            num == 1
                                            msg.channel.send(`\`Your role reaction has been saved.\``)
                                        }
                                        else if (collected.first().content.toLowerCase() == "yes") {
                                            num == 0
                                            msg.channel.send(`Please key in the role:`)
                                            let collected2 = await msg.channel.awaitMessages({filter, max: 1})
                                            rr = collected2.first().mentions.roles.map(role => {
                                                return role.id
                                            })
                                            roleID = rr[0]
                                            msg.channel.send(`Please **react** to this message for the emoji that you want to use with the role stated above.`)
                                            .then(message => {
                                                const filter = (reaction, user) => {return reaction.emoji.name && user.id == author}
                                                message.awaitReactions({filter, max: 1}).then(collected1 => {
                                                    if (!collected1.first().emoji.id) {
                                                        react = collected1.first().emoji.name
                                                        sendingmessage += `\n${react} for <@&${roleID}>`
                                                        chan.messages.fetch(msgID).then(r => {
                                                            const embed = new MessageEmbed()
                                                                .setColor(`#FF69B4`)
                                                                .setDescription(`Please react to one of the emojis to get the role.\nClick the reaction again to the role.`)
                                                                .setFields({name: `Role Reactions`, value: sendingmessage});
                                                            r.edit({embeds: [embed]}).then(msg1 => {
                                                                msg1.react(react)
                                                                savetomongo()
                                                                msg.channel.send(`Do you want to add another role reaction? Reply \`yes\` or \`no\`.`)
                                                            }).catch(e => console.log(e))

                                                        })
                                                    }
                                                    else {
                                                        react = collected1.first().emoji.id
                                                        sendingmessage += `\n<:${collected1.first().emoji.name}:${react}> for <@&${roleID}>`
                                                        chan.messages.fetch(msgID).then(r => {
                                                            const embed = new MessageEmbed()
                                                                .setColor(`#FF69B4`)
                                                                .setDescription(`Please react to one of the emojis to get the role.\nClick the reaction again to the role.`)
                                                                .setFields({name: `Role Reactions`, value: sendingmessage});
                                                            r.edit({embeds: [embed]}).then(msg1 => {
                                                                msg1.react(react).then(h => {
                                                                    reactionsModel.create({
                                                                        serverID: serverID,
                                                                        channelID: chanID,
                                                                        messageID: msgID,
                                                                        emoji: react,
                                                                        role: roleID
                                                                    }).then(created => {
                                                                        if (created) {
                                                                            msg.channel.send(`Do you want to add another role reaction? Reply \`yes\` or \`no\`.`)
                                                                        }
                                                                        else {
                                                                            msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                                                                        }
                                                                    }).catch(e => console.log(e))
                                                                })
                                                            })

                                                        })
                                                    }
                                                })
                                            })
                                        }
                                    }
                            }
                                askingqquestion()
                            }) 
                        })
                    }).catch(e => {
                        console.log(e)
                    })
                })
            })
            .catch(e => {
                    console.log(e)
                });
            }
        }
}