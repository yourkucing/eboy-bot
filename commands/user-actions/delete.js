const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **delete** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media1.tenor.com/images/c50de26db117cbef2a0129b92b26f798/tenor.gif',
        'https://media1.giphy.com/media/26ybwwiZmci3DJdYs/giphy.gif',
        'https://66.media.tumblr.com/1ea51a4d775ec6028dde03a32a007d31/tumblr_p2yzauQ8lq1qgf1i8o1_500.gif',
        'https://media.tenor.com/images/da748c0e712e9db236405613cda72e3f/tenor.gif',
        'https://codemyui.com/wp-content/uploads/2015/05/delete-button-concept-with-hover-animation.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You deleted **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Byebye!`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {		
		const embed = new MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You deleted yourself!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Goodbye, cruel world.`);
		msg.channel.send({embeds: [embed]});

		}
		else {
        random = Math.floor(Math.random()*gifs.length)
		const embed = new MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You deleted **${taggedUser.displayName}**!`)
		.setImage(gifs[random])
		.setFooter(`Byebye, see you never!`);
		msg.channel.send({embeds: [embed]});

		}
	}
}