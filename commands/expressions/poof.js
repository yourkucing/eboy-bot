const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://media.tenor.com/images/0a5270357b348817a43ac7bc9a9aa764/tenor.gif',
            'https://thumbs.gfycat.com/KeenMeekKinglet-small.gif',
            'https://thumbs.gfycat.com/SerpentineSaltyChimpanzee-small.gif',
            'https://media1.tenor.com/images/07ee3c85f8df251c0466cc32b8e35e7f/tenor.gif',
            'https://media.tenor.com/images/344110774bc0f58cae289babb2bd37ac/tenor.gif',
            'https://media1.giphy.com/media/eiqLqFkDGcJa0/giphy.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`and ${msg.guild.members.cache.get(msg.author.id).displayName} poofs like a ninja...`)
		.setImage(randomgif)
		.setFooter(`Uh... bye?`);
		msg.channel.send(embed);
}