const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	eboylog = msg.guild.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **snuggle** command.`)
	var gifs = [
		'https://media.giphy.com/media/kz01wlAoCLYx3v8F68/giphy.gif',
		'https://25.media.tumblr.com/tumblr_m1x1jtIXWQ1qf5ddxo1_500.gif',
		'https://media.tenor.com/images/215f87079f12bccd5dd56def22140668/tenor.gif',
		'https://media.tenor.com/images/b38e8de408c8c3581ee75713d30db469/tenor.gif',
		'https://media.tenor.com/images/57559abb91934c8aaa325a71b0d01706/tenor.gif',
		'https://media.giphy.com/media/3ohhwHAKGA0ilFZrkQ/giphy.gif',
		'https://media.giphy.com/media/f4YPX09pxYGkM/giphy.gif',
		'https://cdn.discordapp.com/attachments/720332521828778064/724318165907013792/tenor-3.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You snuggled **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Snugglesnuggle!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You snuggled yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Snugglesnuggle.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You snuggled **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Snugglesnuggle!`);
			msg.channel.send(embed);

		}
	}
}