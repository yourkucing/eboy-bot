const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **hide** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media2.giphy.com/media/COYGe9rZvfiaQ/giphy.gif',
		'https://media3.giphy.com/media/B37cYPCruqwwg/200.gif',
		'https://media0.giphy.com/media/dxqOkrl29R8ac/giphy.gif',
		'https://thumbs.gfycat.com/ColorfulJadedBittern-size_restricted.gif',
		'https://media1.tenor.com/images/7f45cc8bdccab844a04658546770b634/tenor.gif',
		'https://media1.giphy.com/media/V1NxC1YoNEHBe/giphy.gif',
		'https://media.tenor.com/images/c5220f1e411a16c0afeb35e068345f4f/tenor.gif',
		'https://thumbs.gfycat.com/EsteemedContentBongo-small.gif',
		'https://i2.wp.com/media1.giphy.com/media/Adqe9XUP3x9LO/giphy.gif',
		'https://viralviralvideos.com/wp-content/uploads/GIF/2014/12/Hiding-GIF.gif',
		'https://giffiles.alphacoders.com/209/209148.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`Why are you hiding? XD`)
	.setImage(randomgif)
	.setFooter(`Be careful not to get caught smh XD`);
	msg.channel.send({embeds: [embed]});
}