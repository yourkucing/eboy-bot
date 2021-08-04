const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **dance** command in **${guild}** [${msg.guild.id}].`)

	var gifs = [
		'https://media.tenor.com/images/7fa3b39ddac5925af0d81aefeeeb3ad4/tenor.gif',
		'https://gifimage.net/wp-content/uploads/2017/10/dance-anime-gif-7.gif',
		'https://media.giphy.com/media/6k6iDdi5NN8ZO/giphy.gif',
		'https://media.giphy.com/media/mJIa7rg9VPEhzU1dyQ/giphy.gif',
		'https://pa1.narvii.com/5676/e928b2e40a76e21f334651ec0ed71cfc0c8c6835_hq.gif',
		'https://cutewallpaper.org/21/anime-boy-and-girl-dancing/Animated-gif-about-cute-in-AyoDAIaIs-Eo-AIaEIaNIa-by-airi.gif',
		'https://i.pinimg.com/originals/82/34/83/823483cfa99a1165523255368b8742ea.gif',
		'https://media.tenor.com/images/53106c0ace70edc3fc4838d0234d3c54/tenor.gif',
		'https://media1.tenor.com/images/cacb26720b733ebf1793046a959e98f0/tenor.gif',
		'https://tenor.com/view/dancing-excited-dance-dance-move-smile-gif-16099354',
		'https://media1.tenor.com/images/04ceb352b8e6b4e08644fe63f6408f58/tenor.gif',
		'https://media.tenor.com/images/240eae8ca4e65a5417cc44eab2fe3286/tenor.gif',
		'https://i.pinimg.com/originals/0b/a8/e2/0ba8e2989811721a348c576a1d24ce77.gif',
		'https://tenor.com/view/dance-kid-club-gif-9152583'
		]
	var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
	const taggedUser = msg.mentions.users.first();
	const embed = new Discord.MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`Dance dance dance!`)
	.setImage(randomgif)
	.setFooter(`Let's dance together uwu!`);
	msg.channel.send(embed);
}