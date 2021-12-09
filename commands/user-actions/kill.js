const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **kill** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://i.pinimg.com/originals/06/de/3a/06de3a0af78355bf7d4774cda4e4180e.gif',
		'https://media1.tenor.com/images/2da282c6034d91db471f81d29eb691d9/tenor.gif',
		'https://media1.tenor.com/images/f16e5bcbac25180fa09b9d5c405b3f95/tenor.gif',
		'https://pa1.narvii.com/6559/c8d88737c0eb45dd9f967b04dcbd414a17b8b570_hq.gif',
		'https://i.pinimg.com/originals/4d/6b/0f/4d6b0f94e42656e9ada7d9833409cb75.gif',
		'https://thumbs.gfycat.com/EminentSlowClownanemonefish-size_restricted.gif',
		'https://pa1.narvii.com/5741/4b70053325cbf1fd616dfda66a49210e72b23027_hq.gif',
		'https://thumbs.gfycat.com/AdorableGivingCrayfish-max-1mb.gif',
		'https://media1.tenor.com/images/d3a3e21de3393b6a3b4f16247e283e7b/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${words} is dead! I'll revive them soon uwu.`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is dead! I'll revive them soon uwu.`);
			msg.channel.send({embeds: [embed]});
		}
		else {	
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is dead! I'll revive them soon uwu.`);
			msg.channel.send({embeds: [embed]});
		}
	}
}