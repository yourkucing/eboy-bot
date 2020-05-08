const Discord = require('discord.js');
const ud = require('urban-dictionary');
const client = new Discord.Client();
const prefix = "uwu ";


client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {

 if (msg.content.toLowerCase() === 'uwu') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('OwO');
	 }
 }
 
 else if (msg.content.toLowerCase() === 'owo') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('AwA');
	 }
 }
 
 else if (msg.content.toLowerCase() === 'awa') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('UwU');
	 }
 }

 else if (msg.content === 'hi eboy uwu') {
 msg.channel.send(`hi ${msg.author} uwu!`);
 }

if (!msg.content.startsWith(prefix) || msg.author.bot) return;
const args = msg.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

 if (command === 'uwu') {
	const words = args.join(' ');
	msg.channel.send(words.replace(/r/g,'w').replace(/s/g,'sh').replace(/l/g,'w').replace(/R/g,'W').replace(/S/g,'Sh').replace(/L/g,'W') + ' uwu');
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

 if (command === 'defenestrate') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = ['https://thumbs.gfycat.com/MistyDelectableKouprey-size_restricted.gif', 'https://i.pinimg.com/originals/51/58/88/515888d6d7fadfd3dd0fa312ca287a34.gif']
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.username}!`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated ${taggedUser.username}!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.username}!`);
			msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'yeet') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = [
			'https://media1.tenor.com/images/42b71e0d0b5df489510e78cb4af77902/tenor.gif',
			'https://i.pinimg.com/originals/51/b3/63/51b36342fd05af0f105dab8ade046f0d.gif',
			'https://38.media.tumblr.com/8803e77ad2281c3e66bdf74ec748c23a/tumblr_n57jb9SmxO1tzixowo1_500.gif',
			'https://tenor.com/view/bear-hen-fling-chick-bye-gif-16128623'
			]
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You yeeted yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.username}!`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You yeeted ${taggedUser.username}!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.username}!`);
			msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'slap') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
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
			'https://i.gifer.com/1Vbb.gif',
			'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-10.gif',
			'https://i.chzbgr.com/full/8574231808/h50C257DD/',
			'https://i.imgur.com/VW0cOyL.gif',
			'https://media0.giphy.com/media/xT9IgzTnZHL9zp6IPS/source.gif',
			'https://media.giphy.com/media/3oEduOWVxygmeDIKPu/giphy.gif',
			'https://thumbs.gfycat.com/EarnestAshamedIndochinesetiger-max-1mb.gif',
			'https://i.gifer.com/WOQM.gif',
			'https://thumbs.gfycat.com/CaringFloweryKentrosaurus-small.gif',
			'https://thumbs.gfycat.com/EvenSneakyGraysquirrel-size_restricted.gif',
			'https://tenor.com/view/bye-slap-hit-done-dont-gif-5439399'
			]
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You slapped yourself!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Oof, do I see a handprint mark on your face, ${taggedUser.username}?`);
		msg.channel.send(embed);
		}
		else {
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You slapped ${taggedUser.username}!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Oof, do I see a handprint mark on your face, ${taggedUser.username}?`);
		msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'fuck') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = [
			'https://images.gr-assets.com/hostedimages/1384590430ra/6908411.gif',
			'https://media3.giphy.com/media/7CXIp5bcit6ZG/giphy.gif',
			'https://i.pinimg.com/originals/85/10/a8/8510a8cf2b45ee5656521660e5cabefd.gif',
			'https://66.media.tumblr.com/b5d3af68fba97db9389132e7990dd4d9/tumblr_okdhk3hAuu1rawmqbo1_500.gif',
			'https://66.media.tumblr.com/95a179adbdee32e86c9d3ed3205430c6/tumblr_opn4alLVSi1rrugpso1_400.gif',
			'https://i.pinimg.com/originals/7d/f7/2b/7df72b4cb04b3735a15b925abbf9c5cc.gif',
			'https://media.giphy.com/media/7CXIp5bcit6ZG/200_d.gif'
			]
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
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
			.setDescription(`You- Well.... You want to do ${taggedUser.username}?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Get a room, both of you smh!`);
			msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'kiss') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = [
			'https://media.giphy.com/media/SRbVg86icBP9K/200.gif',
			'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif',
			'https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif',
			'https://media.giphy.com/media/JYpVJEcNrDAWc/giphy.gif',
			'https://media1.tenor.com/images/f03f245e14fdfcacaf06318cdc667a03/tenor.gif',
			'https://thumbs.gfycat.com/AgedWhisperedBarnacle-small.gif',
			'https://66.media.tumblr.com/60c27235f6440d9d6ebd8168bb75c384/tumblr_nxd3nn8iJ81rcikyeo1_500.gif',
			'https://media1.tenor.com/images/6bd9c3ba3c06556935a452f0a3679ccf/tenor.gif',
			'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
			'https://78.media.tumblr.com/44716773d1a091d4b84efbae296ab062/tumblr_or61zhEUtM1skak2ao1_500.gif'
			]
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You kissed yourself! AwA, so cute!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Such cuteness uwu!`);
		msg.channel.send(embed);
		}
		else {
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You kissed ${taggedUser.username}! AwA, so cute!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Such cuteness uwu!`);
		msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'kick') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = [
			'https://media1.tenor.com/images/15a74d10bb6dce11476acfdefe614540/tenor.gif',
			'https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif',
			'https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif',
			'https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif',
			'https://media1.tenor.com/images/d4bd24c980e46c66f67077aff59f0565/tenor.gif',
			'https://i.gifer.com/1UDX.gif',
			'https://i.pinimg.com/originals/0c/09/21/0c09214c4df0c7b2a8f6870144972a82.gif',
			'https://tenor.com/view/fucked-bam-jackass-flying-kick-kick-gif-15175869',
			'https://tenor.com/view/valerian-valerian-gifs-luc-besson-face-kick-cara-delevingne-gif-9068737'
			]
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked yourself! How even?!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.username}?`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked ${taggedUser.username}! Ouch!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.username}?`);
			msg.channel.send(embed);			
		}
	}
 }
 
 if (command === 'hug') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = [
			'https://media1.tenor.com/images/baa6f59f4b89bfff1ff9a22421eb02a6/tenor.gif',
			'https://i.pinimg.com/originals/6e/c3/a6/6ec3a6c6e32bc9d4f01c26a717928a93.gif',
			'https://24.media.tumblr.com/tumblr_m88t9gvikH1rpbfuco1_500.gif',
			'https://media2.giphy.com/media/lrr9rHuoJOE0w/source.gif',
			'https://images-ext-1.discordapp.net/external/wik3p3tqmh0YzWWYf8bOFVcRxehmF9K3OMwQeOxbIlY/https/media.discordyui.net/reactions/hug/fP0FnXi.gif',
			'https://i.ibb.co/K538byR/tenor.gif',
			'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
			'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
			'https://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-27.gif',
			'https://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-7.gif',
			'https://24.media.tumblr.com/3bd5d901c51689fae2a6b95531ed6bef/tumblr_mwqg8a1CQz1rwzq4jo1_500.gif',
			'https://thumbs.gfycat.com/GeneralSlimAntarcticfurseal-size_restricted.gif',
			'https://pa1.narvii.com/6275/8588579649e49bac663309fed7a792daacd2b82b_hq.gif'
			]
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
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
			.setDescription(`You hugged ${taggedUser.username}.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Everyone needs a hug once in awhile....`);
			msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'tonk') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = [
			'https://media1.tenor.com/images/00ad8957bf40ba1efecd71c70f4f6f70/tenor.gif',
			'https://media1.tenor.com/images/b515120c09f3db63ba456c6b45be5066/tenor.gif',
			'https://i.imgur.com/LnGPvPw.gif',
			'https://media.tenor.com/images/003c5629319c1ef6c13f181cdccfbece/tenor.gif'
			]
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked yourself! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.username}?`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked ${taggedUser.username}! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.username}?`);
			msg.channel.send(embed);

		}
	}
 }
 
 if (command === 'punch') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = [
			'https://66.media.tumblr.com/06f9c15ef14eea0140fff2800889eb68/tumblr_nmifhe4pyE1tb8iyko1_400.gif',
			'https://media.giphy.com/media/D9AJVEMgXAhlm/giphy.gif',
			'https://gifimage.net/wp-content/uploads/2017/09/anime-punch-gif-6.gif',
			'https://i.pinimg.com/originals/bb/6b/8e/bb6b8e07c31e7ab9f481240e97704020.gif',
			'https://cdn159.picsart.com/228190013051202.gif',
			'https://3.bp.blogspot.com/-f2C5CBKw05A/W95nlOPZ4HI/AAAAAAABXVo/eU16NRt_qQIh64c3AvSScDYuRL2H6lAegCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BFairy%2BTail%2BFinal%2BSeason%2B-%2BEpisode%2B282%2B-%2BLucy%2BPunch.gif',
			'https://pa1.narvii.com/6335/c697f13cfc2ff482fd2970fb205fd7d23d57dc32_hq.gif',
			'https://1.soompi.io/wp-content/uploads/2014/07/kim-soo-hyun-secretly-greatly-punch.gif',
			'https://tenor.com/view/boxing-cat-gif-7581357'
			]
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You punched yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You punched ${taggedUser.username}!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!`);
			msg.channel.send(embed);

		}
	}
 }
 
 if (command === 'kill') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		const taggedUser = msg.mentions.users.first();
		if (taggedUser.username === msg.author.username) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated yourself!`)
			.setImage('https://i.pinimg.com/originals/06/de/3a/06de3a0af78355bf7d4774cda4e4180e.gif')
			.setFooter(`${taggedUser.username} is dead! I'll revive them soon uwu.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated ${taggedUser.username}!`)
			.setImage('https://i.pinimg.com/originals/06/de/3a/06de3a0af78355bf7d4774cda4e4180e.gif')
			.setFooter(`${taggedUser.username} is dead! I'll revive them soon uwu.`);
			msg.channel.send(embed);

		}
	}
 } 
 
//-----------------------------------------------------------------------------------------------------------------------------------------
 
 if (command === 'celly') {
		var gifs = [
			'https://media.giphy.com/media/9MJ6yDJk2hPUs5wOWc/giphy.gif',
			'https://media3.giphy.com/media/l0IsGAtZTngWc3GCY/giphy.gif',
			'https://66.media.tumblr.com/c74e5b81845034137b8c2daa5c3304ea/tumblr_of45xbpKno1uhf9oxo3_500.gif',
			'https://media1.giphy.com/media/ptLMUxnK5Kj9C/source.gif',
			'https://media3.giphy.com/media/37QGToBO8wCIQoK517/source.gif',
			'https://media.giphy.com/media/2uyoqywDGVu1FKemDB/giphy.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`YAYYYYY CELEBRATE WOOOOHOOO!`)
		.setImage(randomgif)
		.setFooter(`I don't know why you're happy but I'm glad you're happy :3`);
		msg.channel.send(embed);
 }

 if (command === 'cry') {
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
			'https://tenor.com/view/mako-killlakill-cry-anime-gif-5580353'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Are you okay? :(`)
		.setImage(randomgif)
		.setFooter(`Don't cry :(`);
		msg.channel.send(embed);
 }
 
 if (command === 'angry') {
		var gifs = [
			'https://i.pinimg.com/originals/b3/96/e0/b396e0fd1ced8ad36545a9094c5218ad.gif',
			'https://i.pinimg.com/originals/01/48/a2/0148a2c426e64d9ce20db34779832197.gif',
			'https://media0.giphy.com/media/FAI5TtHYYEges/giphy.gif',
			'https://cdn.shopify.com/s/files/1/0318/2649/files/tenor-1_776d86a0-7df7-415c-b5e7-5b5af686ff5a_large.gif',
			'https://media.giphy.com/media/l3fZONy55gOZacqD6/giphy.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`yikes, ${msg.author} is angry!`)
		.setImage(randomgif)
		.setFooter(`Everyone, back away!`);
		msg.channel.send(embed);
 }
 
 if (command === 'tantrum') {
		var gifs = [
			'https://gifimage.net/wp-content/uploads/2017/09/anime-tantrum-gif-9.gif',
			'https://media.tenor.com/images/04db8316e7f739bdb6edb90f93eb0ea0/tenor.gif',
			'https://gifimage.net/wp-content/uploads/2017/09/anime-tantrum-gif-10.gif',
			'https://media.tenor.com/images/adf676c22e131f8654da0efdb5ee1866/tenor.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`${msg.author.username} is throwing a tantrum.`)
		.setImage(randomgif)
		.setFooter(`Everyone stay away from ${msg.author.username}`);
		msg.channel.send(embed);
 }
 
if (command === 'search') {
	var definition = msg.content;
	
	ud.term(definition).then((result) => {
	    const entries = result.entries
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(entries[0].word)
		.setDescription(entries[0].definition)
		.addFields(
		{ name: 'Example:', value: entries[0].example }
		);
		msg.channel.send(embed);
	}).catch((error) => {
	  msg.channel.send('Definition not found.');
	})
}
 
 if (msg.content === '@eboy help' || command === 'help' || command === 'command' || command === 'commands') {
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`Commands`)
		.setDescription('Thank you for using Eboy bot uwu! (∩•̀ω•́)⊃-⋆')
		.addFields(
		{ name: 'main commands', value: 'uwu\r\nowo\r\nawa\r\nhi eboy uwu\r\nuwu uwu <words to uwuify>\r\nuwu search <word to search>' },
		{ name: 'uwu <commands> @<username>', value: 'defenestrate\r\nfuck\r\nhug\r\nkick\r\nkill\r\nkiss\r\npunch\r\nslap\r\ntonk\r\nyeet' },
		{ name: 'uwu <commands>', value: 'angry\r\ncry\r\ncelly\r\ntantrum' },
		)
		.setFooter(`Created by Maryam#9206`);
		msg.channel.send(embed);
 }
 
 });

client.login(process.env.token);