const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    months = {january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12, jan: 1, feb: 2, mar: 3, apr: 4, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12}
    if (!args) {
        //show birthday details
    }
    else {
        if (isNaN(args[0])) {
            msg.channel.send(`**${args[0]}** is not a date. Please try again.`)
            return
        }
        else if (!months.includes(args[1].toLowerCase())) {
            msg.channel.send(`Invalid month. Please try again.`)
            return
        }
        else {
            date = parseInt(args[0])
            month = months[key]
            console.log(month)
        }
    }
}