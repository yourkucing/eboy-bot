const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **confused** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media1.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
		'https://media1.giphy.com/media/1X7lCRp8iE0yrdZvwd/giphy.gif',
		'https://goldstarteachers.com/wp-content/uploads/2018/09/Confused-GIF.gif',
		'https://thumbs.gfycat.com/GiftedUncommonIvorybilledwoodpecker-size_restricted.gif',
		'https://i.imgur.com/P4Pxsem.gif',
		'https://media3.giphy.com/media/l378wF4RrBZ0yLnKo/source.gif',
		'https://media.giphy.com/media/xW5gVURP2l0Uo/giphy.gif',
		'https://media.giphy.com/media/i9nkolRQgbN9C/giphy.gif',
		'https://i.pinimg.com/originals/ed/bf/79/edbf7947412a7c548b55ea910abf091b.gif',
		'https://i.kym-cdn.com/photos/images/original/000/228/791/632.gif',
		'https://media.tenor.com/images/a07fb40340518a39d823bf4b58ef1ab0/tenor.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`Huh? The heck?`)
	.setImage(randomgif)
	.setFooter(`Bruh, I'm confused too XD`);
	msg.channel.send({embeds: [embed]});
}