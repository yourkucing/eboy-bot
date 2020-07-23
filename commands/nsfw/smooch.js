const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	if (!msg.channel.nsfw) {
		return msg.channel.send(`Go to the NSFW channel, ${msg.author}!`);
	}
	else {
		var gifs = [
			'https://media.discordapp.net/attachments/671388130712223815/718507721158164690/200.gif',
			'https://media.giphy.com/media/of7ly2wRNo6Kk/giphy.gif',
			'https://media.giphy.com/media/1g1cnnIbR3JkdUJR5A/giphy.gif',
			'https://media1.tenor.com/images/3e93b32d896a23365b727c8ec8576163/tenor.gif',
			'https://media1.tenor.com/images/6b9d2a780070deaa6168930bfdae64f2/tenor.gif',
			'https://i.pinimg.com/originals/5c/9e/bf/5c9ebf04775941600df653b60cd03041.gif',
			'https://media0.giphy.com/media/11JwraRupZNJSg/giphy.gif',
			'https://media.giphy.com/media/SRbVg86icBP9K/200.gif'
			]
		if (!msg.mentions.users.size) {
			const words = args.join(' ');
			if (words === "") {
				return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`You smooched **${words}**. Is it me or it's getting hot in here?`)
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
				.setDescription(`I can't believe you just french kissed yourself, hot damn.`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`That was some... wew, damn.\r\n`);
				msg.channel.send(embed);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`You smooched **${taggedUser.displayName}**. Is it me or it's getting hot in here?`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Get a room, both of you smh!`);
				msg.channel.send(embed);
			}
		}
	}
}