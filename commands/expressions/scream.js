const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **scream** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media.giphy.com/media/qFi3fACSMnP4Q/giphy.gif',
		'https://38.media.tumblr.com/d9bf97c7aee862ca4858e20122043662/tumblr_nt6f20RFxb1sgl0ajo1_500.gif',
		'https://i.pinimg.com/originals/0d/52/17/0d52176ac1ea9f1be10b5e767493888a.gif',
		'https://66.media.tumblr.com/276977220659dd7969104412605a8a52/tumblr_inline_oyw96aoUdt1us06yu_540.gif',
		'https://thumbs.gfycat.com/LegitimateAnchoredBoa-size_restricted.gif',
		'https://i.pinimg.com/originals/55/83/06/5583064ed9d58208e0460e2519a1d559.gif',
		'https://66.media.tumblr.com/ccfb2a25f87c6e336edd0baf759990fc/tumblr_por8zyKOU81qjlx7n_500.gif',
		'https://reactiongifs.me/wp-content/uploads/2018/06/Angry-Anger_63403.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const embed = new MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is screaming.`)
	.setImage(randomgif)
	.setFooter(`blinks blinks. That was scary.`);
	msg.channel.send({embeds: [embed]});
}