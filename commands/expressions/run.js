const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **run** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media1.tenor.com/images/61b60d1c204911741301af52b5ce7c67/tenor.gif',
        'https://media1.tenor.com/images/5d876558e6fe47858d3d57c20b57d192/tenor.gif',
        'https://media1.tenor.com/images/adb9854eacf159ef1e6e08b979ca07f4/tenor.gif',
        'https://media1.tenor.com/images/8d0e0112d6c46d3ae42f85cd7c4f9782/tenor.gif',
        'https://media1.tenor.com/images/28dfa8f6e3af456fd90d00e2217a9918/tenor.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`OMO, ${msg.guild.members.cache.get(msg.author.id).displayName} is running!`)
	.setImage(randomgif)
	.setFooter(`RUN, RUN, RUN FOR YOUR LIFEEEEE!`);
	msg.channel.send(embed);
}