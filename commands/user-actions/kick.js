const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **kick** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media1.tenor.com/images/15a74d10bb6dce11476acfdefe614540/tenor.gif',
		'https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif',
		'https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif',
		'https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif',
		'https://media1.tenor.com/images/d4bd24c980e46c66f67077aff59f0565/tenor.gif',
		'https://i.pinimg.com/originals/0c/09/21/0c09214c4df0c7b2a8f6870144972a82.gif',
		'https://media.tenor.com/images/64bd964e32d1c943801743aaf0565f25/tenor.gif',
		'https://media1.tenor.com/images/1f8c90e5efbd0bbdf0d385ef4f85c9e9/tenor.gif',
		'https://i.pinimg.com/originals/d4/37/1c/d4371ceac00951149b514e172e9dd64c.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked **${words}**! Ouch!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${words}?`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked yourself! How even?!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?`);
			msg.channel.send({embeds: [embed]});
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked **${taggedUser.displayName}**! Ouch!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?`);
			msg.channel.send({embeds: [embed]});
		}
	}
}