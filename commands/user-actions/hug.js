const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var gifs = [
		'https://media1.tenor.com/images/baa6f59f4b89bfff1ff9a22421eb02a6/tenor.gif',
		'https://cdn.discordapp.com/attachments/688409696364789765/723605363638796398/image0.gif',
		'https://i.pinimg.com/originals/6e/c3/a6/6ec3a6c6e32bc9d4f01c26a717928a93.gif',
		'https://24.media.tumblr.com/tumblr_m88t9gvikH1rpbfuco1_500.gif',
		'https://media2.giphy.com/media/lrr9rHuoJOE0w/source.gif',
		'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
		'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
		'https://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-27.gif',
		'https://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-7.gif',
		'https://24.media.tumblr.com/3bd5d901c51689fae2a6b95531ed6bef/tumblr_mwqg8a1CQz1rwzq4jo1_500.gif',
		'https://pa1.narvii.com/6275/8588579649e49bac663309fed7a792daacd2b82b_hq.gif',
		'https://cdn.lowgif.com/medium/d26c65f2d66be540-merriberri-graphic-arts-services-requests.gif',
		'https://66.media.tumblr.com/85d8161c57f92c9b50590d7605b34e4e/tumblr_inline_pq885e8o7T1v8hwtj_540.gif',
		'https://media1.giphy.com/media/117o9BJASzmLNC/giphy.gif',
		'https://i.pinimg.com/originals/c2/2f/b9/c22fb9595eda0368856778a9a97483a8.gif',
		'https://gifimage.net/wp-content/uploads/2017/11/flying-tackle-hug-gif-7.gif',
		'https://i.pinimg.com/originals/a8/f0/4d/a8f04d7bc4d67745a670e079130dfb54.gif',
		'https://media.tenor.com/images/f1dc8d4a16e2de3b22ff3aa25fd62e8a/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You hugged **${words}**.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Everyone needs a hug once in awhile....`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You hugged yourself. Self-love uwu!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Everyone needs a hug once in awhile....`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You hugged **${taggedUser.displayName}**.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Everyone needs a hug once in awhile....`);
			msg.channel.send(embed);
		}
	}
}