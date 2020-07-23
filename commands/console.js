const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://thumbs.gfycat.com/RemarkableUnluckyBlackpanther-small.gif',
		'https://media.giphy.com/media/C1Fdach2R4HSg/giphy.gif',
		'https://media1.tenor.com/images/2dc14e2010a0bc4786b36a3dfc2fab69/tenor.gif',
		'https://media1.tenor.com/images/eb106be6f33b022bb34781e741e74db9/tenor.gif',
		'https://media1.tenor.com/images/0fb5e945c195639dc28f761fd018605b/tenor.gif',
		'https://media1.tenor.com/images/0c46c6ebe4e822eaa33771bc110de2f9/tenor.gif',
		'https://i.giphy.com/rSNAVVANV5XhK.gif',
		'https://i.imgur.com/08LC0RH.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} consoled **${words}**! There, there, don't be sad. We're here for you.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Aww, don't be sad. ${msg.guild.members.cache.get(msg.author.id).displayName} got your back okay? :heart:`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You consoled yourself. It'll be okay, I promise.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`You're gonna be okay, I promise :3`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} consoled **${taggedUser.displayName}**! There, there, don't be sad. We're here for you.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Aww, don't be sad. ${msg.guild.members.cache.get(msg.author.id).displayName} got your back okay? :heart:`);
			msg.channel.send(embed);

		}
	}
}