const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://data.whicdn.com/images/253889772/original.gif',
            'https://media1.tenor.com/images/925e5d8fd9727f9bfdc821dd979c5813/tenor.gif',
            'https://media2.giphy.com/media/kdM3zfq85XSb6/giphy.gif',
            'https://media4.giphy.com/media/zbMUQKqHZQ4eY/giphy.gif',
            'https://pa1.narvii.com/6917/9ede5d24664d030b7c3667637f8444b3b0c4d284r1-400-559_hq.gif',
            'https://pa1.narvii.com/6245/df490973577b298d463a1c60a1d92ae56dd9001c_hq.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Gulpgulpgulp.`)
		.setImage(randomgif)
		.setFooter(`Drink drink drink drink yes :3`);
		msg.channel.send(embed);
}