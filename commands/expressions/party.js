const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **party** command in **${guild}** [${msg.guild.id}].`)

	const embed = new MessageEmbed()
	.setColor('#FF69B4')
	.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is partying. Woooo!`)
	.setImage('https://media1.tenor.com/images/0e26c577a67808d00e87a2e01dc0278e/tenor.gif')
	.setFooter(`Partay, partay!`);
	msg.channel.send({embeds: [embed]});
}