const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **cling** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://media1.tenor.com/images/74593f6264cec67f1237b3c8b1a2170f/tenor.gif',
        'https://media3.giphy.com/media/uzyuJ0Otml7Co/giphy-downsized-large.gif',
        'https://media.tenor.com/images/44a9b8ae3bc30bb45809f22bc3b3ce39/tenor.gif',
        'https://media4.giphy.com/media/3o85gfVplErR89znCU/giphy-downsized.gif',
        'https://i.pinimg.com/originals/01/bf/0b/01bf0bfdaddc909f7e2f4f56059a9c17.gif',
        'https://media.tenor.com/images/da6749d9f105c2fbb137634bb8655df8/tenor.gif',
        'https://thumbs.gfycat.com/EverlastingLividArchaeocete-size_restricted.gif',
        'https://eddaz.files.wordpress.com/2017/01/635808885465162929-27871722_tumblr_n98mhht1bh1qj4315o1_500.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You clung onto **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Take me with youuuu.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You clung onto... yourself! AwA cute.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Not gonna let myself go. u.u`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You clung onto **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Take me with youuuu.`);
			msg.channel.send(embed);

		}
	}
}