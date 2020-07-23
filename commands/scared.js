const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://media.tenor.com/images/e3c2bee74806139d56d7c08b2b15d333/tenor.gif',
			'https://media.tenor.com/images/91843c93a618cbed9741ee1531025639/tenor.gif',
			'https://media.tenor.com/images/55c089a4480108dde4b5bec69b48be5b/tenor.gif',
			'https://media.tenor.com/images/e4cb8ee5ef75b8eed31dbc173fdd6e6a/tenor.gif',
			'https://media.giphy.com/media/HkUey32gK29RS/giphy.gif',
			'https://i.pinimg.com/originals/11/9b/d8/119bd8a40a0e4df6dce5695be9ee8bc6.gif',
			'https://i2.kym-cdn.com/photos/images/newsfeed/001/070/220/b2d.gif',
			'https://thumbs.gfycat.com/FrenchImpartialKawala-size_restricted.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`D: You're scared?`)
		.setImage(randomgif)
		.setFooter(`WHY ARE YOU SCARED D:`);
		msg.channel.send(embed);
}