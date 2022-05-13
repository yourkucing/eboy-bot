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
    else if (isNaN(args)) {
        msg.channel.send(`Please write an integer between 0 and infinity. eg. \`uwu writing 200\` means that you have currently 200 words in your current novel.`)
    }
}