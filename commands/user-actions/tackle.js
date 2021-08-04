const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **tackle** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media1.giphy.com/media/117o9BJASzmLNC/giphy.gif',
		'https://i.pinimg.com/originals/c2/2f/b9/c22fb9595eda0368856778a9a97483a8.gif',
		'https://gifimage.net/wp-content/uploads/2017/11/flying-tackle-hug-gif-7.gif',
		'https://i.pinimg.com/originals/a8/f0/4d/a8f04d7bc4d67745a670e079130dfb54.gif',
		'https://media.tenor.com/images/f1dc8d4a16e2de3b22ff3aa25fd62e8a/tenor.gif',
        'https://78.media.tumblr.com/785a44646f59406481599efd76cce3b3/tumblr_p9ysl7ULiv1qc775so1_400.gif',
        'https://media1.tenor.com/images/64ffd0c97258e49fd08f17397792c6c0/tenor.gif',
        'https://media3.giphy.com/media/SYoi0LEMKL9QymjyeQ/giphy.gif',
        'https://media.tenor.com/images/0dfd068968cd55331cf27d20e789bcee/tenor.gif',
        'https://i.gifer.com/2QEa.gif',
        'https://media1.tenor.com/images/ee11d47a95f8710248b1a03c44f1501f/tenor.gif',
        'https://64.media.tumblr.com/084afc84cde46070182c5c55028b3259/tumblr_nhk03ueX7b1u7pr1mo1_400.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tackled **${words}**.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`oof I love youuu.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tackled yourself. Self-love uwu!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`oof I love youuu.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tackled **${taggedUser.displayName}**.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`oof I love youuuu.`);
			msg.channel.send(embed);
		}
	}
}