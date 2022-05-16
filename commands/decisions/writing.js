const { Client, Intents, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const writingModel = require('../../models/writingSchema')
const paginationEmbed = require('discordjs-button-pagination');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **writing** command in **${guild}** [${msg.guild.id}].`)

    hooman = msg.author.id
    server = msg.guild.id
    if (!args || args.length == 0) {
        writingkids = await writingModel.find({serverID: server})
        if (!writingkids || writingkids.length == 0) {
            msg.channel.send(`\`No wordcounts have been registered on this server. To do so, please do uwu writing wordcount [eg. uwu writing 200]\``)
            return
        }
        else {
            if (writingkids.length > 10) {
                pageno = Math.ceil(writingkids.length/10)
                const writingarray = []
                let k = 10
                for (let i = 0; i < writingkids.length; i += 10) {
                    const current = writingkids.slice(i, k)
                    let j = i
                    k += 10
                    writings = ""
                    for (m in current) {
                        users = msg.guild.members.cache.get(current[m].userID)
                        if (!users) {
                            console.log(current[m].userID)
                            continue
                        }
                        else {
                            writings += `**${++j}.**  **${users.nickname}**: ${current[m].wordcount} words\n`
                        }
                    }
                    const embed = new MessageEmbed()
                    .setColor('#FF69B4')
                    .setTitle(`Writers`)
                    .setDescription(`These are all the current wordcounts of the writers in this server.`)
                    .addFields({name: `Writers`, value: `${writings}`});

                    writingarray.push(embed)
                }
                const button1 = new MessageButton()
                    .setCustomId("previousbtn")
                    .setLabel("Previous")
                    .setStyle("DANGER");

                const button2 = new MessageButton()
                    .setCustomId("nextbtn")
                    .setLabel("Next")
                    .setStyle("SUCCESS");


                const buttonList = [button1, button2];

                paginationEmbed(msg, writingarray, buttonList).catch(e => {console.log(e)})
            }
            else {
                writinglist = ""
                n = 1
                const embed = new MessageEmbed()
                .setColor('#FF69B4')
                .setTitle(`Writers`)
                .setDescription(`These are all the current wordcounts of the writers in this server.`);
                for (x in writingkids) {
                    users = msg.guild.members.cache.get(writingkids[x].userID)
                    writinglist += `**${n}.** **${users.nickname}**: ${writingkids[x].wordcount} words\n`
                    n++
                }
                embed.addFields({name: `Writers`, value: `${writinglist}`})
                msg.channel.send({embeds: [embed]})
            }
        }
    }
    else if (args[0].toLowerCase() == "delete") {
        msg.channel.send(`Are you sure you want to delete your word count in this server? (Answer yes or no.)`)
        const filter = m => m.author.id == msg.author.id;
        msg.channel.awaitMessages({filter, max: 1, time: 30000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'yes') {
                writingModel.deleteOne({userID: hooman, serverID: server}).then(result => {
                    if (!result) {
                        msg.channel.send(`Sorry ${msg.author}, you did not have any word count saved in this server!`)
                    }
                    else {
                        msg.channel.send(`Word count deleted!`)
                    }
                });
            }
            else {
                msg.channel.send(`Oh, no deletion occurred then!`)
            }
        }).catch(collected => {
            msg.channel.send('Oh, it must have been an accident then!');
            });
    }
    else {
        if (isNaN(args)) {
            msg.channel.send(`Please write an integer between 0 and infinity. eg. \`uwu writing 200\` means that you have currently 200 words in your current novel.`)
        }
        else {
            wordcount = args[0]
            writer = await writingModel.findOne({userID: hooman, serverID: server})

            if (writer) {
                msg.channel.send(`Your wordcount is already in the list. Would you like to replace it with **${wordcount}** words? (Answer yes or no.)`)
                const filter = m => m.author.id == msg.author.id;
                msg.channel.awaitMessages({filter, max: 1, time: 30000}).then(collected => {
                    if (collected.first().content.toLowerCase() == 'yes') {
                        msg.channel.send(wordcount)
                        writingModel.findOneAndUpdate({
                            userID: hooman,
                            server: serverID
                        },
                        {
                            $set: {
                                wordcount: wordcount
                            }
                        }).then(r => {
                            if (r) {
                                msg.channel.send(`Wordcount updated!`)
                            }
                            else {
                                msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                            }
                        })
                    }
                    else {
                        msg.channel.send(`Oh, no changes occurred then!`)
                    }
                }).catch(collected => {
                    msg.channel.send('Oh, it must have been an accident then!');
                    });
            }
            else {
                writingModel.create({
                    serverID: server,
                    userID: hooman,
                    wordcount: wordcount
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
    }
}