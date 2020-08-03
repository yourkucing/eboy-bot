const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	if (!msg.channel.nsfw) {
		return msg.channel.send(`Go to the NSFW channel, ${msg.author}!`);
	}
	else {
		var gifs = [
			'https://images.gr-assets.com/hostedimages/1384590430ra/6908411.gif',
			'https://media3.giphy.com/media/7CXIp5bcit6ZG/giphy.gif',
			'https://i.pinimg.com/originals/85/10/a8/8510a8cf2b45ee5656521660e5cabefd.gif',
			'https://66.media.tumblr.com/b5d3af68fba97db9389132e7990dd4d9/tumblr_okdhk3hAuu1rawmqbo1_500.gif',
			'https://66.media.tumblr.com/95a179adbdee32e86c9d3ed3205430c6/tumblr_opn4alLVSi1rrugpso1_400.gif',
			'https://i.pinimg.com/originals/7d/f7/2b/7df72b4cb04b3735a15b925abbf9c5cc.gif',
			'https://media.giphy.com/media/7CXIp5bcit6ZG/200_d.gif',
            'https://media1.tenor.com/images/bb7d5db9778ac3e124109cd6f450f826/tenor.gif',
            'https://media1.tenor.com/images/d1f37f2333aa790ccbda13c5fea49b46/tenor.gif',
            'https://media1.tenor.com/images/206db91927650b0604f45aba51c5ae2c/tenor.gif',
            'https://media1.tenor.com/images/2f9e0fad5c0273dcfab124ab355dd63a/tenor.gif',
            'https://media1.popsugar-assets.com/files/thumbor/KHLX10V97zRMoI8jSv5g7iSVryo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/04/29/107/n/3019466/1259cad28ccf9620_tumblr_n9r31s3Wsg1rvf3epo6_500/i/Like-really-steamy.gif',
            'https://media1.tenor.com/images/957ae96c23ab0f8964ed5a59ff783dd1/tenor.gif',
            'https://66.media.tumblr.com/e5a6b92398fd5594ff0a8adacf7f449d/tumblr_pz9ezfUeYa1v0c0kgo1_500.gif',
            'https://66.media.tumblr.com/e0109e4cf4d1f731f75bb04be9f34e1d/tumblr_py51kv3uAD1th3s35o1_500.gif',
            'https://i.pinimg.com/originals/38/ad/a3/38ada38d6b86be4fbfa9d45ee524d118.gif',
            'https://24.media.tumblr.com/ccd26c379508c10f6c7fbc1b3c546509/tumblr_mm4i57kjxa1snstk2o1_500.gif',
            'https://24.media.tumblr.com/tumblr_lxxfhaM87c1rnxf0fo1_500.gif',
            'https://i.pinimg.com/originals/7f/bd/a1/7fbda119a597f8b40f7505e3a900c6a2.gif',
            'https://media1.tenor.com/images/668ae6487462b5693f688928a372d4e5/tenor.gif'
			]
		if (!msg.mentions.users.size) {
			const words = args.join(' ');
			if (words === "") {
				return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`You- Well.... You want to do **${words}**?`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Get a room, both of you smh!`);
				msg.channel.send(embed);
			}
		}
		else {
			const taggedUser = msg.mentions.members.first();
			if (taggedUser.id === msg.author.id) {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`So you're gonna do yourself? That's cool.`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Maybe you need some cold shower yeah?`);
				msg.channel.send(embed);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`You- Well.... You want to do **${taggedUser.displayName}**?`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Get a room, both of you smh!`);
				msg.channel.send(embed);
			}
		}
	}
}