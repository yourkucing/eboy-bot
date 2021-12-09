const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **stab** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
        'https://media.tenor.com/images/83b9f04aeeb52ba08b6a081d0f5fe085/tenor.gif',
        'https://thumbs.gfycat.com/EmotionalCompleteGourami-size_restricted.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You stabbed **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`STAB STAB STAB.`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You stabbed yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`STAB STAB STAB.`);
			msg.channel.send({embeds: [embed]});
		}
		else {	
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You stabbed **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`STAB STAB STAB.`);
			msg.channel.send({embeds: [embed]});
		}
	}
}