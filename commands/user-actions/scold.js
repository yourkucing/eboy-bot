const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	eboylog = msg.guild.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **scold** command.`)
	var gifs = [
		'https://media.tenor.com/images/55bd0b903b703f36cf6085262f48fdb5/tenor.gif',
		'https://media1.giphy.com/media/26ufeGxY6J7l6k86c/source.gif',
		'https://media1.giphy.com/media/cn2vHXruExI3nqOFE2/giphy.gif',
		'https://media.tenor.com/images/61a3b54c53622d2399c9ea974f12494b/tenor.gif',
		'https://data.whicdn.com/images/292426229/original.gif',
		'https://media1.tenor.com/images/7c0cda357337e432d4a7c6a5a4ede968/tenor.gif',
		'https://thumbs.gfycat.com/WeeDisgustingKitfox-small.gif',
		'https://i.imgur.com/boP8yem.gif',
		'https://media1.tenor.com/images/d4edb49259c7705708c0b73984cafefe/tenor.gif',
		'https://data.whicdn.com/images/245801212/original.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You scolded **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Poor ${words} XD`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You scolded yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`HAHAHAHA ARE YOU OKAY?`);
			msg.channel.send(embed);
		}
		else {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You scolded **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`SMH, what did you do, ${taggedUser.displayName}?`);
			msg.channel.send(embed);
		}
	}
}