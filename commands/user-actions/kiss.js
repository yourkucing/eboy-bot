const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://media.giphy.com/media/JYpVJEcNrDAWc/giphy.gif',
		'https://66.media.tumblr.com/60c27235f6440d9d6ebd8168bb75c384/tumblr_nxd3nn8iJ81rcikyeo1_500.gif',
        'https://thumbs.gfycat.com/InconsequentialMeaslyFly-size_restricted.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kissed **${words}**! AwA, so cute!`)
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
		.setDescription(`You kissed yourself! AwA, so cute!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Such cuteness uwu!`);
		msg.channel.send(embed);
		}
		else {
        random = Math.floor(Math.random()*gifs.length)
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You kissed **${taggedUser.displayName}**! AwA, so cute!`)
		.setImage(gifs[random])
		.setFooter(`Such cuteness uwu! number: ${random}`);
		msg.channel.send(embed);
		}
	}
}