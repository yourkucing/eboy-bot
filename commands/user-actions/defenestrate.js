const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **defenestrate** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://thumbs.gfycat.com/MistyDelectableKouprey-size_restricted.gif',
		'https://i.pinimg.com/originals/51/58/88/515888d6d7fadfd3dd0fa312ca287a34.gif'
	]
	if (!msg.mentions.users.size) {
		let words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${words}!`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		let taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!`);
			msg.channel.send({embeds: [embed]});
		}
		else {
			
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!`);
			msg.channel.send({embeds: [embed]});
		}
	}
}