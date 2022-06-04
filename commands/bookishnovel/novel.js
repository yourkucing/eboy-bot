const { Client, Intents, MessageEmbed, Permissions, MessageAttachment } = require('discord.js');
const canvacord = require("canvacord");

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **novel** command in **${guild}** [${msg.guild.id}].`)

    img = "https://iconape.com/wp-content/png_logo_vector/book-18.png"

    rank = new canvacord.Rank()
        .setAvatar(img)
        .setCurrentXP(356)
        .setRequiredXP(1000)
        .setProgressBar("#FFFFFF", "COLOR")
        .setUsername(author.username);
    
    rank.build()
    .then(data => {
        attachment = canvacord.write(data, "rankcard.png")
        msg.channel.send(attachment);
    });
        
    
}