const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **eat** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif',
		'https://i.pinimg.com/originals/fd/d2/2f/fdd22fe6112b90d08d6c63aa53d0762d.gif',
		'https://media1.tenor.com/images/80e45406f5386242fe7699badd51b342/tenor.gif',
		'https://media.giphy.com/media/rDZuJKhOcLTEI/200w.gif',
		'https://thumbs.gfycat.com/ContentFrenchBadger-size_restricted.gif',
		'https://66.media.tumblr.com/465fd76d4ac2dc7c6cb492f394f8c743/tumblr_oa2k3wiMsY1smufyzo1_400.gif',
		'https://gifimage.net/wp-content/uploads/2018/04/kirby-eating-gif-8.gif',
		'https://media1.tenor.com/images/21f1f30024f331959b1c7818a7aa0136/tenor.gif',
		'https://media.giphy.com/media/ViC6liI1iz3TGxb4po/giphy.gif',
		'https://i.pinimg.com/originals/db/a1/fc/dba1fca1c27106c53b04ee2333099217.gif',
		'https://media0.giphy.com/media/9n4muqn344LMA/source.gif',
		'https://gifimage.net/wp-content/uploads/2017/11/eating-anime-gif-2.gif',
		'https://gifimage.net/wp-content/uploads/2017/11/eating-anime-gif-14.gif'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`Omnomnomnom.`)
	.setImage(randomgif)
	.setFooter(`Eat eat eat eat yes :3`);
	msg.channel.send(embed);
}