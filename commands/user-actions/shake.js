const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **shake** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media1.tenor.com/images/2255d1ff7517290d482f45fff6e1a364/tenor.gif',
		'https://thumbs.gfycat.com/SpottedBrokenEider-size_restricted.gif',
		'https://thumbs.gfycat.com/BountifulUnconsciousDuckbillplatypus-size_restricted.gif',
		'https://data.whicdn.com/images/121997983/original.gif',
		'https://media1.giphy.com/media/11WojR0GhjExlm/giphy.gif',
		'https://media.tenor.com/images/c85aaeebedaeb399070e7790eb23fbdd/tenor.gif',
		'https://i.gifer.com/281L.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You shook **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Poor ${words}!`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You shook yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you... okay?`);
			msg.channel.send({embeds: [embed]});
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You shook **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Poor ${taggedUser.displayName}!`);
			msg.channel.send({embeds: [embed]});

		}
	}
}