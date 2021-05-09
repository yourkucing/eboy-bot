const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var d = new Date
		var gifs = [
			'https://media.tenor.com/images/6ce51eaa48401e0aa7b0ea46b7a98bb7/tenor.gif',
            'https://thumbs.gfycat.com/ClosePitifulBluetickcoonhound-max-1mb.gif',
            'https://media.tenor.com/images/96920a4419ae38508722682946e8538b/tenor.gif',
            'https://i.gifer.com/W9y.gif',
            'https://64.media.tumblr.com/2b6d22a0a1032ae0e7b07266382542b6/tumblr_n7mwawp4rL1ssbvp5o1_400.gif',
			'https://tenor.com/view/boman-pass-away-ded-disrespected-gif-18574910'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Just let me pass away in peace. Please. -${msg.guild.members.cache.get(msg.author.id).displayName} ${d.getFullYear()}`)
		.setImage(randomgif)
		.setFooter(`Uh, should I revive them or nah?`);
		msg.channel.send(embed);
}