const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **untonk** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://i.gifer.com/DnDH.gif',
		'https://i.pinimg.com/originals/47/e2/60/47e260a9aaaee0c887bbc24a8e1b2fdf.gif',
		'https://64.media.tumblr.com/e17f4f4b48e9ba6b71fb5ed2d6c46905/tumblr_oo0w2xXN681v5i3nmo1_500.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You untonked **${words}**! So nice AwA!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${words} is now UNTONKED.`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You untonked yourself! Yeah, no tonking!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`You are now UNTONKED.`);
			msg.channel.send({embeds: [embed]});
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You untonked **${taggedUser.displayName}**! So nice AwA!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is now UNTONKED.`);
			msg.channel.send({embeds: [embed]});

		}
	}
}