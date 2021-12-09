const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **work** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media4.giphy.com/media/13GIgrGdslD9oQ/200.gif',
		'https://media.tenor.com/images/341999c41df2fb1b4133e28f3beab742/tenor.gif',
		'https://media1.giphy.com/media/unQ3IJU2RG7DO/giphy.gif',
		'https://acegif.com/wp-content/uploads/cat-typing-2.gif',
		'https://64.media.tumblr.com/0d6dfb71dc0ad02b5f36798fd9a79f9d/tumblr_pb7roqakH61use6ffo2_400.gif',
		'https://media2.giphy.com/media/lCbSAbRrFEfkY/200.gif',
		'https://media2.giphy.com/media/E6jscXfv3AkWQ/200.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`work work work, yes! go and work, ${msg.guild.members.cache.get(msg.author.id).displayName}!`)
	.setImage(randomgif)
	.setFooter(`inserts intense typing clickclack!`);
	msg.channel.send({embeds: [embed]});
}