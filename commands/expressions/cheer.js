const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://media1.tenor.com/images/c2253a663a1ed9f1b601c5d2c9cbd95a/tenor.gif',
            'https://media1.tenor.com/images/b87965180922cdf4c79f83a6650fc570/tenor.gif',
            'https://media1.tenor.com/images/20acd1812b4906d1893b9b33a16a3fd8/tenor.gif',
            'https://media.tenor.com/images/9fa8286f2aa5ed0817a81b402ea121b5/tenor.gif',
            'https://media1.tenor.com/images/0f5c9cda7f0db2457d09024a1b837e0f/tenor.gif',
            'https://media.tenor.com/images/cb0da29acf22b6f6874f80aabbcda778/tenor.gif',
            'https://media1.tenor.com/images/fc10efb4b431b4e36bb2e679af592a00/tenor.gif',
            'https://media1.tenor.com/images/a6c0c9bf9f7b825c9ccc1a857bd97e15/tenor.gif',
            'https://media1.tenor.com/images/9679d019929d180c2f30ba8b03b8e3af/tenor.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`YOU GOT THIS YOU GOT THIS!`)
		.setImage(randomgif)
		.setFooter(`YAYAYAYAYAY!`);
		msg.channel.send(embed);
}