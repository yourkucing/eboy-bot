const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    if (msg.author.id == "279101053750870017") {
        msg.delete();
        const fetched = await msg.channel.messages.fetch({limit: 99});
        msg.channel.bulkDelete(fetched);
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}