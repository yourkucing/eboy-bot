const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://media.giphy.com/media/9MJ6yDJk2hPUs5wOWc/giphy.gif',
			'https://media3.giphy.com/media/l0IsGAtZTngWc3GCY/giphy.gif',
			'https://66.media.tumblr.com/c74e5b81845034137b8c2daa5c3304ea/tumblr_of45xbpKno1uhf9oxo3_500.gif',
			'https://media1.giphy.com/media/ptLMUxnK5Kj9C/source.gif',
			'https://media3.giphy.com/media/37QGToBO8wCIQoK517/source.gif',
			'https://media.giphy.com/media/2uyoqywDGVu1FKemDB/giphy.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`YAYYYYY CELEBRATE WOOOOHOOO!`)
		.setImage(randomgif)
		.setFooter(`I don't know why you're happy but I'm glad you're happy :3`);
		msg.channel.send(embed);
}