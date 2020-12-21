const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const words = args.join(' ')
    choice = words.substring(
                words.lastIndexOf("[") + 1, 
                words.lastIndexOf("]")
            )
    choice = choice.split(",")
    n = Math.floor(Math.random() * choice.length)
    msg.channel.send("`Result: " + choice[n] + "`");
    
}