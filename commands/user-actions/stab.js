const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://i.gifer.com/EJEW.gif',
        'https://media.tenor.com/images/83b9f04aeeb52ba08b6a081d0f5fe085/tenor.gif',
        'https://thumbs.gfycat.com/EmotionalCompleteGourami-size_restricted.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You stabbed **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`people in pain are IMMUNE. - Roman Shore Young, 2020`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You stabbed yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`people in pain are IMMUNE. - Roman Shore Young, 2020`);
			msg.channel.send(embed);
		}
		else {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You stabbed **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`people in pain are IMMUNE. - Roman Shore Young, 2020`);
			msg.channel.send(embed);
		}
	}
}