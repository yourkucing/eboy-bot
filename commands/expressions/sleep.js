const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **sleep** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media1.tenor.com/images/a7e8e8f9fd0a8784012d8f14b09da4a8/tenor.gif',
		'https://66.media.tumblr.com/9a0efe3d6c1516214e3b3ffce5a51c78/tumblr_os2qsvffPq1qzxv73o1_400.gif',
		'https://media1.tenor.com/images/7355297a8feac260037d4109758d3be8/tenor.gif',
		'https://i.pinimg.com/originals/ca/dd/f1/caddf1ef532d286996080f27f71f87d2.gif',
		'https://gifimage.net/wp-content/uploads/2018/05/sleep-anime-gif-4.gif',
		'https://media.tenor.com/images/b954c0ad5c0457d464eb6c2a8f504a73/tenor.gif',
		'https://media3.giphy.com/media/Ml8ZIPp2dDmaA/source.gif',
		'https://media.tenor.com/images/62f71c86005b866fc87a3a7ef1d5038a/tenor.gif',
		'https://i.pinimg.com/originals/f1/0c/5f/f10c5fcdb94355b83c54eb156f5b4866.gif',
		'https://33.media.tumblr.com/2c2d94ebae4db3569a369ca823f198d4/tumblr_ntqwcuHf6k1tvgytqo1_400.gif',
		'https://67.media.tumblr.com/31769f4d42a89d3641021f4a722a79de/tumblr_nv5vd05KLE1tzv1dpo1_500.gif',
		'https://media.tenor.com/images/e7ea73ed83e59cdd198d6ecbe8eeb170/tenor.gif',
		'https://25.media.tumblr.com/47c0340672e7b03207b4f3b895bd77ee/tumblr_mmrgjsy0zE1s89hgko1_400.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`Feeling sleepy? Go to sleep smh.`)
	.setImage(randomgif)
	.setFooter(`*puts blanket on you* Goodnighty uwu!`);
	msg.channel.send(embed);
}