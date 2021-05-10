const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://media2.giphy.com/media/Ws4Mtju5Sq1swakFzU/giphy.gif',
			'https://25.media.tumblr.com/cac15db77acffa7a1fbab43a272594c7/tumblr_myjojt29AM1t0951zo1_400.gif',
			'https://38.media.tumblr.com/37c0928c9e3f1f16c6f910cc3c04247e/tumblr_nabqw145or1slmtxco1_500.gif',
			'https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif',
			'https://i.pinimg.com/originals/73/b1/3b/73b13bcd2590cd93ca1ca9bbc7f917be.gif',
			'https://66.media.tumblr.com/98c6d9e942941712e0ef9518fca97a7c/tumblr_opni85yA931v8tshbo1_400.gif',
			'https://media2.giphy.com/media/b5z9pHJxxcREI/source.gif',
			'https://0.soompi.io/wp-content/uploads/2018/05/31015948/sun1.gif',
			'https://66.media.tumblr.com/288c98a5fa9db9685a2235e99cfd5e5f/c1603ff26e43b4e4-2a/s500x750/757d7addc38fce25488eea6b8671c9e1859a3880.gif',
			'https://media.tenor.com/images/1186d85399c24953459c7d516f57f346/tenor.gif',
			'https://66.media.tumblr.com/df182d407162f72277331c7843316225/tumblr_p3n2reSZNE1uku9tco5_500.gif',
            'https://i.gifer.com/XZ9.gif',
            'https://i.pinimg.com/originals/a3/67/c3/a367c3875b642f636077484d2566d7d3.gif',
            'https://www.animatedimages.org/data/media/1498/animated-sad-image-0020.gif',
            'https://i.pinimg.com/originals/60/68/b8/6068b8de6a62b9c24fa7ab8769e588fb.gif',
			'https://tenor.com/view/baby-sad-cry-tears-gif-6165001'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Are you okay? :(`)
		.setImage(randomgif)
		.setFooter(`Don't cry :( We're here for you.`);
		msg.channel.send(embed);
}