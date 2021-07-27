const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.author.id == "279101053750870017") {
        channelID = "719493404190572604"
        guildID = "719491348713046057"
        messageID = "869630102294626374"
        channel = client.channels.cache.get(channelID)
        message = channel.message.fetch("701574160211771462")
  
        message.edit('This is my new content!')
        .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
        .catch(console.error);
        message.react('🦀')
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}