const Discord = require('discord.js');
const birthdayModel = require('../../models/birthdaySchema')

module.exports.run = async(client, msg, args) => {
    hooman = msg.author.id
    months = {january: 01, february: 02, march: 03, april: 04, may: 05, june: 06, july: 07, august: 08, september: 09, october: 10, november: 11, december: 12, jan: 01, feb: 02, mar: 03, apr: 04, jun: 06, jul: 07, aug: 08, sep: 09, oct: 10, nov: 11, dec: 12}
    if (!args) {
        //show birthday details
    }
    else {
        if (isNaN(args[0])) {
            msg.channel.send(`**${args[0]}** is not a date. Please try again.`)
            return
        }
        else if (!(args[1].toLowerCase()) in months) {
            msg.channel.send(`Invalid month. Please try again.`)
            return
        }
        else {
            date = parseInt(args[0])
            month = months[args[1].toLowerCase()]
            birthday = `2002-${month}-${date}`
            birthdayModel.create({
                serverID: msg.guild.id,
                userID: hooman,
                birthday: birthday
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