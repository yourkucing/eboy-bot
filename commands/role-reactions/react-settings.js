const Discord = require('discord.js');
//const reactionsModel = require('../../models/reactionsSchema');

module.exports.run = async(client, msg, args) => {
    serverID = msg.guild.id
    msg.channel.send(`Please tag the channel that you want the message reaction to be in: (Eg. #reaction-here)\nReply with "exit" to exit.`)
    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
        if (collected.first().content.toLowerCase() == 'exit') {
            msg.channel.send("Goodbye for now!")
            return
        }
        else {
            msg.channel.send(collected.first().content)
            console.log(collected)
        }
    })
}