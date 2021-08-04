const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **patpat** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media.tenor.com/images/8237d7da8cbd7227d67d735d437612cf/tenor.gif',
		'https://media.tenor.com/images/67dc5a58a23461f3f449e8f46623b1df/tenor.gif',
		'https://media3.giphy.com/media/M3a51DMeWvYUo/giphy.gif',
		'https://66.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gif',
		'https://66.media.tumblr.com/d743a5e5ecc65be5cb6ac8de7978fb22/tumblr_pfyit1ofSu1th206io1_500.gif',
		'https://i.imgur.com/2lacG7l.gif',
		'https://archive-media-0.nyafuu.org/c/image/1501/69/1501696680832.gif',
		'https://data.whicdn.com/images/295195659/original.gif',
		'https://gifimage.net/wp-content/uploads/2018/04/pat-gif-3.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You patpats smol **${words}** UwU`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${words} is patted uwu.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You patpats yourself! Okay?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is patted uwu.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You patpats smol **${taggedUser.displayName}** UwU`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is patted uwu.`);
			msg.channel.send(embed);

		}
	}
}