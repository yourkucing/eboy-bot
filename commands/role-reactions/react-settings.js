const Discord = require('discord.js');
//const reactionsModel = require('../../models/reactionsSchema');

module.exports.run = async(client, msg, args) => {
    author = msg.author.id
    serverID = msg.guild.id
    msg.channel.send(`Please tag the channel that you want the message reaction to be in: (Eg. #reaction-here)\nReply with "exit" to exit.`)
    msg.channel.awaitMessages(m => m.author.id == author, {max: 1}).then(collected => {
        if (collected.first().content.toLowerCase() == 'exit') {
            msg.channel.send("Goodbye for now!")
            return
        }
        else {
            const channels = collected.first().mentions.channels.map(channel => {
                return channel.id;
            })
            channel = channels[0]
            msg.channel.send(`Please tag the role that you want: (Eg. @potatokids)\nReply with "exit" to exit.`)
            msg.channel.awaitMessages(m => m.author.id == author, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!")
                    return
                }
                else {
                    const roles = collected.first().mentions.roles.map(role => {
                        return role.id;
                    })
                    role = role[0]
                    msg.channel.send(`Please reply with the emoji that you want: (Eg. :heart:)\nReply with "exit" to exit.`)
                    msg.channel.awaitMessages(m => m.author.id == author, {max: 1}).then(collected => {
                        if (collected.first().content.toLowerCase() == 'exit') {
                            msg.channel.send("Goodbye for now!")
                            return
                        }
                        else {
                            console.log(collected.first().content)
                        }
                    })
                }
            })
            
        }
    })
}