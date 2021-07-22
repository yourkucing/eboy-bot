const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **hydrate** command.`)

	var gifs = [
		'https://media.tenor.com/images/91b7e8c89b7509c61ec50ac2ad95dbaa/tenor.gif',
		'https://media.giphy.com/media/nfnF2zVPRemXu/giphy.gif',
		'https://thumbs.gfycat.com/BetterPortlyApisdorsatalaboriosa-max-1mb.gif',
		'https://media2.giphy.com/media/4VIACsYrWirEQ/giphy.gif',
		'https://media0.giphy.com/media/y7ZWNmtIcf2TxTBDmE/200.gif',
		'https://media1.tenor.com/images/3219e45726514f8bb0525ebdcd1e010a/tenor.gif',
		'https://i.pinimg.com/originals/23/00/d5/2300d52c64171c70642fd61f4d1451ce.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is drinking water.`)
	.setImage(randomgif)
	.setFooter(`Please hydrate yourself!`);
	msg.channel.send(embed);
}