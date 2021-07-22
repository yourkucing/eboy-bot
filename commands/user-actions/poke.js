const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	eboylog = msg.guild.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **poke** command.`)
	var gifs = [
		'https://media.tenor.com/images/2770e28a8b4d7906a334c5deef0e3d54/tenor.gif',
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b174d50628543.58d507961af0d.gif',
        'https://media.tenor.com/images/a0e5105faf3f068bbc545d653b96d019/tenor.gif',
        'https://i.pinimg.com/originals/49/9d/ff/499dff1b825ded0acb3dafb4536e734b.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You poked **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Poke poke, you there? :3`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You poked yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Poke poke poke!`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You poked **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Poke poke, you there? :3`);
			msg.channel.send(embed);
		}
	}
}