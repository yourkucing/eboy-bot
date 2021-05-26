const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        const channel = client.channels.cache.get(args[0])
        msg.channel.send(`Welcome, boss. Ready to rumble?`)
        msg.channel.awaitMessages(m => m.author.id == msg.author.id).then(collected => {
            if(collected.first().content == "exit")
            {
                msg.channel.send(`Oh, we're done? Goodbye!`)
                return
            }
            else {
                channel.send(words)
            }
        })
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}