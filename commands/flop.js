const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://media.tenor.com/images/d12f9890d49ea8a68664115a68585545/tenor.gif',
			'https://media1.tenor.com/images/3593aa01d50e7bee38fa017ec07f643d/tenor.gif',
			'https://media.tenor.com/images/fae521807c9affd8c624efdf25811ac2/tenor.gif',
			'https://media.tenor.com/images/0efb3170753d0b88c68ada2497f0d42f/tenor.gif',
			'https://media1.tenor.com/images/1bd629c0c85492ccd073661d1f00ca13/tenor.gif',
			'https://media.tenor.com/images/36543b5b0a8da71955cf919d576dbdaa/tenor.gif',
			'https://media.giphy.com/media/olyqByuQ9o5gY/giphy.gif',
			'https://imgur.com/5kxtJ5c.gif',
			'https://gif-finder.com/wp-content/uploads/2019/05/Corgi-pup-just-loves-to-flop.gif',
			'https://i.imgur.com/cg82b.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} flops uwu`)
		.setImage(randomgif)
		.setFooter(`floppityflopflop`);
		msg.channel.send(embed);
}