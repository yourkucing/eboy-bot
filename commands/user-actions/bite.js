const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **bite** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media1.tenor.com/images/c91f7e6ca3f5c157c5e6f6e4ea2e364c/tenor.gif',
		'https://media1.tenor.com/images/283b04320ccd718991714e38953f06d1/tenor.gif',
		'https://media1.giphy.com/media/7NUDCypKavZzkQGyp9/giphy.gif',
		'https://media.giphy.com/media/mEMRAZYygRyk8/giphy.gif',
		'https://media.giphy.com/media/Cvx6i8tQDTHEI/200.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You bit **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`LMAO, does ${words} look like food to you?`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You bit yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you hungry, ${taggedUser.displayName}? Don't eat yourself smh.`);
			msg.channel.send(embed);
		}
		else {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You bit **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`LMAO, does ${taggedUser.displayName} look like food to you?`);
			msg.channel.send(embed);
		}
	}
}