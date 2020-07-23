const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://66.media.tumblr.com/7173b8342de4a562acb7aba71230180b/fe5357219304e9b5-e3/s400x600/1f02df87a142304bd87cffdcec09e1ccdeb3ab39.gif',
			'https://66.media.tumblr.com/0379fbff8f23ef10013562356f5e8d7a/tumblr_inline_p5agb7dgud1tltfjj_250.gif',
			'https://media.tenor.com/images/111f02206bb127df4f65b68a11ede28f/tenor.gif',
			'https://thumbs.gfycat.com/DemandingTestyCockerspaniel-size_restricted.gif',
			'https://i.imgur.com/jvvzWoD.gif',
			'https://66.media.tumblr.com/b929990374849ef5eccdcecb4e3a63d6/493662379149e842-e6/s540x810/f659ee847afe5109f821c3c7c0b736b1f6d4a58a.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Ew, yuck!`)
		.setImage(randomgif)
		.setFooter(`What the heck, ew....`);
		msg.channel.send(embed);
}