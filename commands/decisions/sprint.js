const Discord = require('discord.js');
const sprintModel = require('../../models/sprintSchema')
const ms = require('ms');

module.exports.run = async(client, msg, args) => {
    sprinter = msg.author.id
    guild = msg.guild.id
    channel = msg.channel.id
    time =  parseFloat(args) * 60 * 1000
    if (isNaN(time)) {
        msg.channel.send(`Nani the fuck is "uwu sprint ${args}"? Plesae state the time, tsk. [Eg. "5" = 5 minutes]`)
    }
    else {
        msg.channel.send(`Please key in your original word count: ("Exit" to exit. If you have no word count, just key in "0".)`);
        msg.channel.awaitMessages(m => m.author.id == sprinter, {max: 1}).then(collected => {
            if (collected.first().content.toLowerCase() == 'exit') {
                msg.channel.send("Goodbye for now!");
                return
            }
            else if (isNaN(parseInt(collected.first().content))) {
                msg.channel.send("That's not a number, bro. Please retry.")
                return
            }
            else {
                wordcount = parseInt(collected.first().content)
                msg.channel.send(`Writing sprint for ${args} minutes starts now, <@${sprinter}>!`)
                sprint = sprintModel.create({
                    userID: sprinter,
                    serverID: guild,
                    channelID: channel,
                    sprint: Date.now() + time,
                    word: wordcount
                }).catch((e) => { console.log(e); })
            }
        })
        
    }
}