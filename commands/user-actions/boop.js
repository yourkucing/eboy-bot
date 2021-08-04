const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **boop** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media2.giphy.com/media/oeYpYm0BOEDWo/giphy.gif',
		'https://imgur.com/QDkTaFe.gif',
		'https://media.giphy.com/media/12BGUcW8xxpPRS/giphy.gif',
		'https://media.giphy.com/media/Mf4NqZAknusBq/giphy.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You booped **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Boop bap.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You booped yourself! AwA cute.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Boop bap.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You booped **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Boop bap.`);
			msg.channel.send(embed);

		}
	}
}