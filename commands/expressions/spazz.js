const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **spazz** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://vicariousbookworm.files.wordpress.com/2018/09/tenor.gif',
		'https://i.pinimg.com/originals/c5/94/6f/c5946fa77bf152d8af6f899833829ad0.gif',
		'https://cdn41.picsart.com/170301162000202.gif',
		'https://media.tenor.com/images/c928b5474e688bfaa8108b6e04e043dd/tenor.gif',
		'https://media.tenor.com/images/e5993e389cd5667789c957c05aee7c5c/tenor.gif',
		'https://media.giphy.com/media/Rv0zzokgDrg4M/200.gif',
		'https://thumbs.gfycat.com/VeneratedBlackHoneycreeper-size_restricted.gif',
		'https://media1.popsugar-assets.com/files/thumbor/hPm4dv68O0i8Vyb2kBA8XQ84yLM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/04/08/925/n/1922283/eeac818b5cd5bb2d_anigif_enhanced-buzz-20962-1384956300-31/i/She-jumps-she-screams-you-know-happy-person.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`sdjkfhsajkfhsdaj SO CUTE`)
	.setImage(randomgif)
	.setFooter(`AAAAAAH SPAZZ SPAZZ OMLL EFHFJHK`);
	msg.channel.send({embeds: [embed]});
}