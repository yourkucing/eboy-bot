const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif',
		'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
		'https://i.imgur.com/GPQJEx5.gif',
		'https://i.imgur.com/Li9mx3A.gif',
		'https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif',
		'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
		'https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif',
		'https://66.media.tumblr.com/00af342d3838fed0f978b62ff496dfea/tumblr_phizajqDcb1wj1nn0o1_400.gif',
		'https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif',
		'https://pa1.narvii.com/6807/ac91cef2e5ae98f598665193f37bba223301d75c_hq.gif',
		'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-10.gif',
		'https://i.makeagif.com/media/10-13-2015/kTH4sW.gif',
		'https://i.imgur.com/VW0cOyL.gif',
		'https://media0.giphy.com/media/xT9IgzTnZHL9zp6IPS/source.gif',
		'https://media.giphy.com/media/3oEduOWVxygmeDIKPu/giphy.gif',
		'https://thumbs.gfycat.com/EarnestAshamedIndochinesetiger-max-1mb.gif',
		'https://thumbs.gfycat.com/CaringFloweryKentrosaurus-small.gif',
		'https://thumbs.gfycat.com/EvenSneakyGraysquirrel-size_restricted.gif',
		'https://media.tenor.com/images/6cbccba5255abc270993e4cca01ee7ea/tenor.gif',
		'https://1.bp.blogspot.com/-nGZ4wxXKozQ/XRkIv5cvMtI/AAAAAAAAAGk/GF4vZXDpDSk0QE0NG4PN7sFf1YMm9TZKgCLcBGAs/s1600/f3a.gif',
		'https://media1.tenor.com/images/d4e82fc23bd94bebf5280b0682285f6a/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You slapped **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Oof, do I see a handprint mark on your face, ${words}?`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You slapped yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Oof, do I see a handprint mark on your face, ${taggedUser.displayName}?`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You slapped **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Oof, do I see a handprint mark on your face, ${taggedUser.displayName}?`);
			msg.channel.send(embed);
		}
	}
}