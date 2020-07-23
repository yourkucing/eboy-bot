const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://media.tenor.com/images/7fa3b39ddac5925af0d81aefeeeb3ad4/tenor.gif',
			'https://gifimage.net/wp-content/uploads/2017/10/dance-anime-gif-7.gif',
			'https://media.giphy.com/media/6k6iDdi5NN8ZO/giphy.gif',
			'https://media.giphy.com/media/mJIa7rg9VPEhzU1dyQ/giphy.gif',
			'https://pa1.narvii.com/5676/e928b2e40a76e21f334651ec0ed71cfc0c8c6835_hq.gif',
			'https://cutewallpaper.org/21/anime-boy-and-girl-dancing/Animated-gif-about-cute-in-AyoDAIaIs-Eo-AIaEIaNIa-by-airi.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Dance dance dance!`)
		.setImage(randomgif)
		.setFooter(`Let's dance together uwu!`);
		msg.channel.send(embed);
}