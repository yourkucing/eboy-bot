const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **yoink** command.`)

	var gifs = [
		'https://media1.giphy.com/media/5cdenDXni65aM/giphy.gif',
		'https://media.giphy.com/media/VSiNfsl8VIRIk/giphy.gif',
		'https://media.giphy.com/media/ofHpfBbgXhEVG/giphy.gif',
		'https://media1.tenor.com/images/63af4cb08b86163f4ff2a7997d1ac7dc/tenor.gif',
		'https://iruntheinternet.com/lulzdump/images/cat-steal-streat-under-couch-paw-steal-snide-14238627235.gif',
		'https://media.tenor.com/images/1f44eb631e8b9b4cd65e3d35ac00c04b/tenor.gif',
		'https://media1.tenor.com/images/482d0bce20389f7395948a0f52b670ee/tenor.gif',
		'https://media1.tenor.com/images/ee5f77dab6dc52a84666f9516b49f7bf/tenor.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is stealing. Be careful of your stuffs and pets!`)
	.setImage(randomgif)
	.setFooter(`SWIPER NO SWIPING!`);
	msg.channel.send(embed);
}