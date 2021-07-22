const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **choke** command.`)

	if (!msg.channel.nsfw) {
		return msg.channel.send(`Go to the NSFW channel, ${msg.author}!`);
	}
	else {
		var gifs = [
			'https://media.tenor.com/images/d85e03f80495f2b0e59beb333b973ce9/tenor.gif',
            'https://78.media.tumblr.com/1eff7a7c10a9bc702b5751ec245808e9/tumblr_nx0k9vmlfN1rks5xoo1_400.gif',
            'https://thumbs.gfycat.com/FaintNaughtyGreathornedowl-size_restricted.gif',
            'https://images.gr-assets.com/hostedimages/1457452062ra/18361409.gif'
			]
		if (!msg.mentions.users.size) {
			const words = args.join(' ');
			if (words === "") {
				return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`Choking **${words}**? This might get steamy.`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Yes, daddy.`);
				msg.channel.send(embed);
			}
		}
		else {
			const taggedUser = msg.mentions.members.first();
			if (taggedUser.id === msg.author.id) {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`Choking yourself? This might get steamy.`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Yes, daddy.`);
				msg.channel.send(embed);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`Choking **${taggedUser.displayName}**? This might get steamy.`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Yes, daddy.`);
				msg.channel.send(embed);
			}
		}
	}
}