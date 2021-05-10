const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://cdn.discordapp.com/emojis/717706418651922465.gif',
        'https://media.tenor.com/images/efef0a0b04a78392697ef7882ee251e6/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} hates **${words}** bweeeeee!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`HMPH.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`I hate myself bweeee but I still love myself uwu :pleading_face:`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`SMH you'd better love yourself!`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} hates you, **${taggedUser.displayName}** bweeee! But they love you still, uwu :pleading_face:`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Don't worry, we still love you, ${taggedUser.displayName}!`);
			msg.channel.send(embed);

		}
	}
}