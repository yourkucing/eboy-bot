const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://media1.tenor.com/images/086bf6533db61bbf5e91fa1d840987df/tenor.gif',
		'https://thumbs.gfycat.com/FewVibrantArmadillo-size_restricted.gif',
		'https://thumbs.gfycat.com/RipeJealousIlsamochadegu-size_restricted.gif',
		'https://media1.tenor.com/images/665d4e485a24e33e3c96df83643cbab9/tenor.gif',
		'https://media1.tenor.com/images/af3cfaa6d71fd97e4c45be0181d07a62/tenor.gif',
		'https://media1.tenor.com/images/9c93d5622695c85ca918a7f8cbaf834b/tenor.gif',
		'https://media1.tenor.com/images/b9ca1a4fa3e08bafe08861d721305f4a/tenor.gif',
		'https://media.tenor.com/images/6e495177b93e27f527168c9cf715466f/tenor.gif',
		'https://media.tenor.com/images/9cba7dd3484af1aed76cb46c5fe22234/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You summoned **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`o.o are they here?`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You summoned yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Aren't you already here? o.o`);
			msg.channel.send(embed);
		}
		else {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You summoned **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} will arrive in 3.... 2.... 1.... (if they're not here, you can yeet them.)`);
			msg.channel.send(embed);
		}
	}
}