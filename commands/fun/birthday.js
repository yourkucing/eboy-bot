const Discord = require('discord.js');
const birthdayModel = require('../../models/birthdaySchema')
const paginationEmbed = require('discord.js-pagination');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **birthday** command.`)

    hooman = msg.author.id
    server = msg.guild.id
    months = {january: 01, february: 02, march: 03, april: 04, may: 05, june: 06, july: 07, august: 08, september: 09, october: 10, november: 11, december: 12, jan: 01, feb: 02, mar: 03, apr: 04, jun: 06, jul: 07, aug: 08, sep: 09, oct: 10, nov: 11, dec: 12}
    if (!args || args.length == 0) {
        birthdaykids = await birthdayModel.find({serverID: server})
        if (!birthdaykids || birthdaykids.length == 0) {
            msg.channel.send(`\`No birthdays have been registered on this server. To do so, please do uwu birthday date month [eg. uwu birthday 17 march]\``)
            return
        }
        else {
            if (birthdaykids.length > 10) {
                pageno = Math.ceil(birthdaykids.length/10)
                const birthdayarray = []
                let k = 10
                for (let i = 0; i < birthdaykids.length; i += 10) {
                    const current = birthdaykids.slice(i, k)
                    let j = i
                    k += 10
                    const birthdays = current.map(bdays => `**${++j}.**  **${msg.guild.members.cache.get(bdays.userID).displayName}**: ${bdays.birthday.getDate()} ${bdays.birthday.toLocaleString('default', { month: 'long' })}`).join(`\n`)
                    const embed = new Discord.MessageEmbed()
                    .setColor('#FF69B4')
                    .setTitle(`Birthdays`)
                    .setDescription(`These are all the birthdays of the people in this server.`)
                    .addFields({name: `Birthdays`, value: `${birthdays}`});

                    birthdayarray.push(embed)
                }

                msg.channel.send(birthdayarray[0])
                console.log(birthdayarray.length)
            }
            else {
                birthdaylist = ""
                const embed = new Discord.MessageEmbed()
                .setColor('#FF69B4')
                .setTitle(`Birthdays`)
                .setDescription(`These are all the birthdays of the people in this server.`);
                for (x in birthdaykids) {
                    birthdaylist += `**${msg.guild.members.cache.get(birthdaykids[x].userID).displayName}**: ${birthdaykids[x].birthday.getDate()} ${birthdaykids[x].birthday.toLocaleString('default', { month: 'long' })}\n`
                    
                }
                embed.addFields({name: `Birthdays`, value: `${birthdaylist}`})
                msg.channel.send(embed)
            }
        }
    }
    else {
        date = args[0]
        month = args[1].toLowerCase()
        if (isNaN(args[0])) {
            msg.channel.send(`**${args[0]}** is not a date. Please try again.`)
            return
        }
        else if (!(month in months)) {
            msg.channel.send(`Invalid month. Please try again.`)
            return
        }
        else {
            date = parseInt(date)
            month = months[month]
            birthday = `2000-${month}-${date}`
            birthdayModel.create({
                serverID: server,
                userID: hooman,
                channelID: msg.channel.id,
                birthday: new Date(birthday)
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