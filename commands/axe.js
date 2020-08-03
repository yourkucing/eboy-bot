const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`How about a hatchet instead, ${msg.guild.members.cache.get(msg.author.id).displayName}?`)
		.setImage('https://media1.tenor.com/images/ad46605733978b0992b375c01e456905/tenor.gif')
		.setFooter(`An axe seems too big for you.`);
		msg.channel.send(embed);
}