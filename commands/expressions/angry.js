const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	eboylog = msg.guild.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **angry** command.`)

	var gifs = [
		'https://i.pinimg.com/originals/b3/96/e0/b396e0fd1ced8ad36545a9094c5218ad.gif',
		'https://i.pinimg.com/originals/01/48/a2/0148a2c426e64d9ce20db34779832197.gif',
		'https://media0.giphy.com/media/FAI5TtHYYEges/giphy.gif',
		'https://cdn.shopify.com/s/files/1/0318/2649/files/tenor-1_776d86a0-7df7-415c-b5e7-5b5af686ff5a_large.gif',
		'https://media.giphy.com/media/l3fZONy55gOZacqD6/giphy.gif',
		'https://i.pinimg.com/originals/99/a5/c8/99a5c8a3b795505bebc0d7ff1788208e.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`yikes, ${msg.guild.members.cache.get(msg.author.id).displayName} is angry!`)
	.setImage(randomgif)
	.setFooter(`Everyone, back away!`);
	msg.channel.send(embed);
}