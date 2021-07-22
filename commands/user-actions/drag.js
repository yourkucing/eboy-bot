const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	eboylog = msg.guild.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **drag** command.`)
	var gifs = [
		'https://media.tenor.com/images/fcb3f477cd25d365c800a0e9826c0921/tenor.gif',
		'https://media.giphy.com/media/LModbUFxtnw9q/giphy.gif',
		'https://media1.tenor.com/images/8424903ed8b4219cee83a1417e59e20b/tenor.gif',
		'https://media2.giphy.com/media/LXJ4hM0NB1GSs/giphy.gif',
		'https://media.tumblr.com/ecde59f4dc9a34e3876643a57cb345a9/tumblr_inline_mpq7mtdWgz1qz4rgp.gif',
		'https://i.pinimg.com/originals/64/c7/44/64c744f80082fb6e002cf4824655a19a.gif',
		'https://media1.tenor.com/images/900b9598601e8875034b075f5a7bcd29/tenor.gif',
		'https://media.tenor.com/images/ff8058ad37789799f2c58324b8a030a5/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You dragged **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Bye bye, ${words} XD`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You dragged yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Weeee~`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You dragged **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Bye bye, ${taggedUser.displayName} XD`);
			msg.channel.send(embed);

		}
	}
}