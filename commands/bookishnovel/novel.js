const { Client, Intents, MessageEmbed, Permissions, MessageAttachment } = require('discord.js');
const canvacord = require("canvacord");

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **novel** command in **${guild}** [${msg.guild.id}].`)

    img = "https://iconape.com/wp-content/png_logo_vector/book-18.png"
    
    canvacord.createProgressBar()
    .then(data => {
        const attachment = new MessageAttachment(data, "RankCard.png")
        const embed = new MessageEmbed()
        .setColor('#FF69B4')
        .setTitle(`Hero/Villain Story`)
        .setDescription(`Villian put a spell on the hero to hurt everyone he loves but the villain hurts too.`)
        .setImage('attachment://RankCard.png');
        msg.channel.send({embeds: [embed], files:[attachment]});
    });
        
    
}