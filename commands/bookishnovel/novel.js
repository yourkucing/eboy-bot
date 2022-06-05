const { Client, Intents, MessageEmbed, Permissions, MessageAttachment } = require('discord.js');
const canvacord = require("canvacord");

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **novel** command in **${guild}** [${msg.guild.id}].`)

    img = "https://iconape.com/wp-content/png_logo_vector/book-18.png"

    const rank = new canvacord.Rank()
        .setAvatar(img)
        .setCurrentXP(356)
        .setRequiredXP(1000)
        .setProgressBar("#FFFFFF", "COLOR")
        .setUsername(author.username)
        .setRank(0, "", false)
        .setLevel(0, "", false);
    
    rank.build()
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