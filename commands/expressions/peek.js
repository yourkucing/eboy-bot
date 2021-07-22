const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **peek** command.`)

	var gifs = [
		'https://i0.wp.com/linuxnewbieguide.org/wp-content/uploads/2016/10/catpeek.gif',
		'https://media1.tenor.com/images/728c4f4a22020f4eca886fd8dedbbd9b/tenor.gif',
		'https://media1.tenor.com/images/7c601cbeb6ea173da8b226bb49e4a66d/tenor.gif',
		'https://media1.tenor.com/images/4cf9b6ee9e89af46dba9479c40142ed7/tenor.gif',
		'https://media1.tenor.com/images/fc3193e1464c3cc1a5c071bb205946ce/tenor.gif',
		'https://media.tenor.com/images/f7b2b726324c76473a7c3fa8ef6db562/tenor.gif',
		'https://media1.tenor.com/images/df38c174a2becc894086b1fd913d3adb/tenor.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is peeking.`)
	.setImage(randomgif)
	.setFooter(`Anyone there?`);
	msg.channel.send(embed);
}