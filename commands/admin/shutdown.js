const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.user.id == "279101053750870017") {
        client.destroy();
    }
    else {
        msg.channel.send("You don't have permission to use this, only my owner does.")
    }
    
}