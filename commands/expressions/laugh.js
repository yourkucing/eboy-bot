const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	eboylog = msg.guild.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **laugh** command.`)

	var gifs = [
		'https://media1.tenor.com/images/84a574d2577b153d6e10a8338d530f3e/tenor.gif',
		'https://www.midwestsportsfans.com/wp-content/uploads/2011/06/mj-laughing.gif',
		'https://www.reactiongifs.us/wp-content/uploads/2013/05/lol_ricky_gervais.gif',
		'https://media1.tenor.com/images/e82c2cd09db0bf410917cda2ef22ffd4/tenor.gif',
		'https://i.pinimg.com/originals/4f/d6/b2/4fd6b288e420f400d8633d40a4b9ad98.gif',
		'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif',
		'https://thumbs.gfycat.com/FlimsyNaturalBalloonfish-small.gif',
		'https://media.tenor.com/images/acea1a340a3e2e94b7d1da5dd522310d/tenor.gif',
		'https://i.pinimg.com/originals/e1/13/27/e113272f2f2ffbd1f88dbf44989fa17e.gif',
		'https://media1.tenor.com/images/b2d7f6c218b0a551a8d15a38f9b3bb22/tenor.gif',
		'https://media0.giphy.com/media/TORQpT78yQR5S/giphy.gif',
		'https://media.tenor.com/images/ca4bc7e331b0bce938f3d5355ac17aa8/tenor.gif',
		'https://media1.tenor.com/images/027af2c70a60536a7d311e8b084a9ae7/tenor.gif',
		'https://media1.tenor.com/images/694357a89167bfb3511c58cd1926cc50/tenor.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is laughing.`)
	.setImage(randomgif)
	.setFooter(`Bruh whats so funny? XD`);
	msg.channel.send(embed);
}