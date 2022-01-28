const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **ghost** command in **${guild}** [${msg.guild.id}].`)

    msg.channel.send(`https://media3.giphy.com/media/3No4ujPLZrDJC/giphy.gif`).then((sentMessage) => 
    setTimeout(function(){
        sentMessage.edit(`Boo.`);
    }, 4000)
)
}