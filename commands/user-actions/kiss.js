const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **kiss** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif',
		'https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif',
		'https://media.giphy.com/media/JYpVJEcNrDAWc/giphy.gif',
		'https://media1.tenor.com/images/f03f245e14fdfcacaf06318cdc667a03/tenor.gif',
		'https://thumbs.gfycat.com/AgedWhisperedBarnacle-small.gif',
		'https://66.media.tumblr.com/60c27235f6440d9d6ebd8168bb75c384/tumblr_nxd3nn8iJ81rcikyeo1_500.gif',
		'https://media1.tenor.com/images/6bd9c3ba3c06556935a452f0a3679ccf/tenor.gif',
		'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
		'https://78.media.tumblr.com/44716773d1a091d4b84efbae296ab062/tumblr_or61zhEUtM1skak2ao1_500.gif',
		'https://49.media.tumblr.com/ac7e6f5ee22260439ceb89b67d57b6cb/tumblr_mwwkjpb5rh1src1c6o1_500.gif',
		'https://i.pinimg.com/originals/ca/4e/fd/ca4efd302a2c335f5d8d1ffc05734ab9.gif',
        'https://i.pinimg.com/originals/31/21/77/3121775da1ebe9779bf8daebc472dad8.gif',
        'https://data.whicdn.com/images/88262356/original.gif',
        'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif',
        'https://media1.tenor.com/images/632a3db90c6ecd87f1242605f92120c7/tenor.gif',
        'https://media.giphy.com/media/3bzmFeSYj3rRpygVjC/giphy.gif',
        'https://media1.tenor.com/images/2ae74002666041a3e0dbe97c39dd2dd4/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kissed **${words}**! AwA, so cute!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Such cuteness uwu!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {		
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You kissed yourself! AwA, so cute!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Such cuteness uwu!`);
		msg.channel.send(embed);
		}
		else {
        random = Math.floor(Math.random()*gifs.length)
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You kissed **${taggedUser.displayName}**! AwA, so cute!`)
		.setImage(gifs[random])
		.setFooter(`Such cuteness uwu!`);
		msg.channel.send(embed);
		}
	}
}