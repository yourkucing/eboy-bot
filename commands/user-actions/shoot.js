const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **shoot** command.`)
	var gifs = [
        'https://media.tenor.com/images/d8d4438e8d07601f7b0525be55e65e2b/tenor.gif',
        'https://media.tenor.com/images/8f253935f2736d31efb80c41d287c994/tenor.gif',
        'https://media.tenor.com/images/a34dd7537be45df945cfd91eba72576c/tenor.gif',
        'https://pa1.narvii.com/5974/7e9f44408e1dd64b8423e5389bf5d041579dbf69_hq.gif',
        'https://i.kym-cdn.com/photos/images/newsfeed/000/515/568/25a.gif',
        'https://i.pinimg.com/originals/2a/d3/c1/2ad3c140443203a7b81881db95604475.gif',
        'https://media.tenor.com/images/9a72febb83de3cf8de8e7e6fad5927bb/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You shot **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Ouch, that has got to hurt!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You shot yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Ouch, that has got to hurt!`);
			msg.channel.send(embed);
		}
		else {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You shot **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Ouch, that has got to hurt!`);
			msg.channel.send(embed);
		}
	}
}