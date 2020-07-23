const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://media1.tenor.com/images/00ad8957bf40ba1efecd71c70f4f6f70/tenor.gif',
		'https://media1.tenor.com/images/b515120c09f3db63ba456c6b45be5066/tenor.gif',
		'https://i.imgur.com/LnGPvPw.gif',
		'https://media1.tenor.com/images/f2059cfecd9343a5a3d1fb8af10c3aaf/tenor.gif',
		'https://media.tenor.com/images/5376fa4e263ef3d21bea9fb175d09a59/tenor.gif',
		'https://media.tenor.com/images/4516ee548d7acbe5e4c106c86d92bccf/tenor.gif',
		'https://media1.tenor.com/images/1b88846ca4d36ca14c955bd6364f21f3/tenor.gif',
		'https://media.tenor.com/images/003c5629319c1ef6c13f181cdccfbece/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked **${words}**! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${words}?`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked yourself! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked **${taggedUser.displayName}**! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?`);
			msg.channel.send(embed);

		}
	}
}