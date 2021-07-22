const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **tantrum** command.`)

	var gifs = [
		'https://gifimage.net/wp-content/uploads/2017/09/anime-tantrum-gif-9.gif',
		'https://media.tenor.com/images/04db8316e7f739bdb6edb90f93eb0ea0/tenor.gif',
		'https://gifimage.net/wp-content/uploads/2017/09/anime-tantrum-gif-10.gif',
		'https://media.tenor.com/images/adf676c22e131f8654da0efdb5ee1866/tenor.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is throwing a tantrum.`)
	.setImage(randomgif)
	.setFooter(`Aww, what's wrong, ${msg.guild.members.cache.get(msg.author.id).displayName}?`);
	msg.channel.send(embed);
}