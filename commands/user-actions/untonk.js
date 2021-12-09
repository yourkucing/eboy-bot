const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **untonk** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://s4.gifyu.com/images/untonk1.gif',
		'https://s4.gifyu.com/images/untonk2.gif',
		'https://s4.gifyu.com/images/tonk3.gif',
		'https://s6.gifyu.com/images/tonk4.gif'
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