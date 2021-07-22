const Discord = require('discord.js');
//const reactionsModel = require('../../models/reactionsSchema');

module.exports.run = async(client, msg, args) => {
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
}