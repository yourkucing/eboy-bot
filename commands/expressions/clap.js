const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **clap** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media.tenor.com/images/039b76f457e474fccd92a26f5562393d/tenor.gif',
		'https://media3.giphy.com/media/srg19CG0cKMuI/200.gif',
		'https://media2.giphy.com/media/l3q2XhfQ8oCkm1Ts4/giphy.gif',
		'https://media1.tenor.com/images/1bd3aaa14e6c60866238e0009fb042b4/tenor.gif',
		'https://media1.tenor.com/images/0de120c10a661c15cb60fe77b8eac367/tenor.gif',
		'https://cdn.lowgif.com/full/01be67c39428150b-gif-anime-happy-smile-animated-gif-on-gifer-by-anayaswyn.gif',
		'https://thumbs.gfycat.com/ClumsyExcellentLeveret-size_restricted.gif',
		'https://i.kym-cdn.com/photos/images/original/000/840/249/375.gif',
		'https://giffiles.alphacoders.com/139/139354.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`Clap clap clap!`)
	.setImage(randomgif)
	.setFooter(`YAY BRAVO! Standing ovation uwu.`);
	msg.channel.send({embeds: [embed]});
}