const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://media1.tenor.com/images/ea51c3a083c73bf81a3c5ee6d4165115/tenor.gif',
		'https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif',
		'https://media.tenor.com/images/de18124ebe36764446ee2dbf54a672bf/tenor.gif',
		'https://thumbs.gfycat.com/PopularHideousAcornweevil-size_restricted.gif',
		'https://thumbs.gfycat.com/FatalHarmfulCormorant-size_restricted.gif',
		'https://media.tenor.com/images/48ddb8f9bd0580697882ae5e0d70b080/tenor.gif',
		'https://cutewallpaper.org/21/anime-kiss-on-the-cheek/Anime-Kiss-On-The-Cheek-Gif.gif',
		'https://media.tenor.com/images/2346a83cb600c3a8feb4000d515b7c0c/tenor.gif',
		'https://media.tenor.com/images/dc8e3ebf72fa8fd34523aa8d99a72ad4/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You pecked **${words}'s** cheeks!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Such cuteness uwu!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You pecked your own cheek, how even?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Cheeksies uwu :3`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You pecked **${taggedUser.displayName}'s** cheeks!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Such cuteness uwu!`);
			msg.channel.send(embed);
		}
	}
}