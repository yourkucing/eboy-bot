const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **love** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media2.giphy.com/media/yc2pHdAoxVOrJ2m5Ha/200.gif',
		'https://media3.giphy.com/media/hqTwf417EvUWeV0XcX/giphy.gif',
		'https://media2.giphy.com/media/kG3kzEP6BCpyg0YNMi/giphy.gif',
		'https://media.giphy.com/media/l4pTdcifPZLpDjL1e/giphy.gif',
		'https://data.whicdn.com/images/293095869/original.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} loves **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`We all love you too, ${words}!`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`I love myself uwu`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`It's good to love yourself.`);
			msg.channel.send({embeds: [embed]});
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} loves you, **${taggedUser.displayName}**! I love you.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`We all love you too, ${taggedUser.displayName}!`);
			msg.channel.send({embeds: [embed]});
		}
	}
}