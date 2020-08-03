const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	if (!msg.channel.nsfw) {
		return msg.channel.send(`Go to the NSFW channel, ${msg.author}!`);
	}
	else {
		var gifs = [
			'https://media.discordapp.net/attachments/671388130712223815/718507721158164690/200.gif',
			'https://media.giphy.com/media/of7ly2wRNo6Kk/giphy.gif',
			'https://media.giphy.com/media/1g1cnnIbR3JkdUJR5A/giphy.gif',
			'https://media1.tenor.com/images/3e93b32d896a23365b727c8ec8576163/tenor.gif',
			'https://media1.tenor.com/images/6b9d2a780070deaa6168930bfdae64f2/tenor.gif',
			'https://i.pinimg.com/originals/5c/9e/bf/5c9ebf04775941600df653b60cd03041.gif',
			'https://media0.giphy.com/media/11JwraRupZNJSg/giphy.gif',
			'https://media.giphy.com/media/SRbVg86icBP9K/200.gif',
            'https://media1.tenor.com/images/602d428225ecd797a5c193937014f96c/tenor.gif',
            'https://media1.tenor.com/images/5aa5e12de9439716acbf90a47d2980e1/tenor.gif',
            'https://media1.tenor.com/images/c2176b58d660506c8cd9e0147a885218/tenor.gif',
            'https://64.media.tumblr.com/61bd30202d13c5f59afa3316eae95dc5/tumblr_n4wuazKyJd1twq2vno1_500.gif',
            'https://media1.popsugar-assets.com/files/thumbor/g_A4-7nSUIviknr38YFsPr8elus/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/29/107/n/3019466/960786fef869dc42_True-Blood/i/Because-getting-steamy.gif',
            'https://thumbs.gfycat.com/MeagerIndolentCivet-small.gif',
            'https://media1.tenor.com/images/f1cddfbea8a58007549e020cc2566e01/tenor.gif'
			]
		if (!msg.mentions.users.size) {
			const words = args.join(' ');
			if (words === "") {
				return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`You smooched **${words}**. Is it me or it's getting hot in here?`)
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
				.setDescription(`I can't believe you just french kissed yourself, hot damn.`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`That was some... wew, damn.\r\n`);
				msg.channel.send(embed);
			}
			else {
				const embed = new Discord.MessageEmbed()
				.setColor('#FF69B4')
				.setDescription(`You smooched **${taggedUser.displayName}**. Is it me or it's getting hot in here?`)
				.setImage(gifs[Math.floor(Math.random()*gifs.length)])
				.setFooter(`Get a room, both of you smh!`);
				msg.channel.send(embed);
			}
		}
	}
}