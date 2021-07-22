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
            channel = msg.guild.channels.cache.get(channels[0])
            sendingmessage = `Please click on the following reactions to get your roles:\n\n`
            msg.channel.send(`Please tag the role that you want as well as the emoji: (Eg. @potatokids :heart:)\nKeep replying continuously and when you're done, reply with "done".`)
            const collector = msg.channel.createMessageCollector(
                m => m.author.id == author
              );
            role = []
            reaction = []
            for await (const m of collector) {
                if (m.content.toLowerCase() == "done") {
                    collector.stop()
                    msg.channel.send(`Oh, we're done? Goodbye!`)
                }
                else {
                    const roles = m.content.mentions.roles.map(role => {
                        return role.id
                    })
                    role.push(roles[0])
                    rr = m.content.split(" ")
                    console.log(rr)
                }
            }
        }
    })
}