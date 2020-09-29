const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://media1.tenor.com/images/06e438bb03983a7c7087618f20b2c25a/tenor.gif?itemid=8203989',
        'https://media0.giphy.com/media/Tex4wVhhs4iwKoV7YT/giphy-downsized-large.gif',
        'https://media1.tenor.com/images/a02cee03339a2156d20a968be61a6ee8/tenor.gif',
        'https://media4.giphy.com/media/2u11zpzwyMTy8/200.gif',
        'https://media.discordapp.net/attachments/673244399635005493/677734890317283338/image0.jpg'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You gave **${words}** money wow!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${words} is rich now.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You gave yourself money! Okay?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is rich now.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You gave **${taggedUser.displayName}** money wow!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is rich now.`);
			msg.channel.send(embed);

		}
	}
}