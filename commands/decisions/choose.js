const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = msg.guild.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **choose** command.`)
    
    const words = args.join(' ')
    choice = words.substring(
                words.lastIndexOf("[") + 1, 
                words.lastIndexOf("]")
            )
    choice = choice.split(",")
    n = Math.floor(Math.random() * choice.length)
    msg.channel.send("`Result: " + choice[n] + "`");
    
}