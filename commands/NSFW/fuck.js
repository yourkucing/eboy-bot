const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	if (!msg.channel.nsfw) {
		return msg.channel.send(`Go to the NSFW channel, ${msg.author}!`);
	}
	else {
		var gifs = [
			'https://images.gr-assets.com/hostedimages/1384590430ra/6908411.gif',
			'https://media3.giphy.com/media/7CXIp5bcit6ZG/giphy.gif',
			'https://i.pinimg.com/originals/85/10/a8/8510a8cf2b45ee5656521660e5cabefd.gif',
			'https://66.media.tumblr.com/b5d3af68fba97db9389132e7990dd4d9/tumblr_okdhk3hAuu1rawmqbo1_500.gif',
			'https://66.media.tumblr.com/95a179adbdee32e86c9d3ed3205430c6/tumblr_opn4alLVSi1rrugpso1_400.gif',
			'https://i.pinimg.com/originals/7d/f7/2b/7df72b4cb04b3735a15b925abbf9c5cc.gif',
			'https://media.giphy.com/media/7CXIp5bcit6ZG/200_d.gif'
			]
		if (!msg.mentions.users.size) {
			const words = args.join(' ');
			if (words === "") {
				return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`You- Well.... You want to do **${words}**?`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Get a room, both of you smh!`);
				msg.channel.send(embed);
			}
		}
		else {
			const taggedUser = msg.mentions.members.first();
			if (taggedUser.id === msg.author.id) {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`So you're gonna do yourself? That's cool.`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Maybe you need some cold shower yeah?`);
				msg.channel.send(embed);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`You- Well.... You want to do **${taggedUser.displayName}**?`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Get a room, both of you smh!`);
				msg.channel.send(embed);
			}
		}
	}
}