const Discord = require('discord.js');
const ud = require('urban-dictionary');
const client = new Discord.Client({disableEveryone: false});
const prefix = "uwu ";
const fs = require('fs');
const db = require('quick.db');

let eboys = [];

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity('uwu help', { type: 'STREAMING' });
 });
 
client.on('guildMemberAdd', member => {
	const guild = member.guild;
	if (guild.id === "714366752489865276") {
		client.channels.cache.get("714366752489865279").send(`Hey **${member.displayName}**, welcome to **World of Zodiac**!\n\nPlease head yourself to <#714370031709978665> to sort yourself into a certain house that you want to be in! And then don't forget to head yourself to <#714370627871440956> as well! After that, you can go to <#714370677632794695> to introduce yourself, and have conversations with all people in this server on <#714367141620744244> ! Just don't forget to read the rules in <#714372663841259572> though! It's necessary! :wink:\n\nHave fun, Stars! We hope you enjoy being in this server! :sparkles:`);
		member.roles.add(member.guild.roles.cache.find(x => x.id == "714374597914656810"), "");
	}
})

client.on('message', msg => {
	
if (msg.author.bot) return

 if (msg.content.toLowerCase() === 'òwó') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('buzz buzz');
	 }
 }
 
 if (msg.content.toLowerCase().includes('why are you called eboy')) {
 msg.channel.send('hi ' + msg.author.toString() +' uwu! I am named after Jackolantern! He is the bestest eboy uwu.');
 }
 
 if (msg.content.toLowerCase().includes('eboy, who built you?')) {
 msg.channel.send('hi ' + msg.author.toString() +' uwu! Maryam#9206 built me. If you have any questions, complaints or suggestions, you can DM her :heart:');
 }
 
 if (msg.content.toLowerCase() === 'uwu') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('OwO');
	 }
 }
 
 if (msg.content.toLowerCase() === 'owo') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('AwA');
	 }
 }
 
 if (msg.content.toLowerCase() === 'awa') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('UwU');
	 }
 }
 
 if (msg.content.toLowerCase() === 'i love you maryam havich' || msg.content.toLowerCase() === 'i love you maryam dinzly' || msg.content.toLowerCase() === 'i love you, maryam havich' || msg.content.toLowerCase() === 'i love you, maryam dinzly') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('Maryam loves you too, ' + msg.author.toString() +' uwu! :heart:');
		 if (msg.author.id === "630803907181936641") {
			msg.author.send(`hihi Roman uwu :pleading_face: \n\nI just want to let you know that I love you a whole lot and if you're feeling down and lost about yourself, let me remind you of why I (and many others) love you.\n\nI mean there's the fact that you're freaking ass amazing. I'm not gonna lie, you're one of the important reasons why I am how I am today. You taught me a whole lot of stuffs.\n\nYou taught me to be more confident in myself which yes, it takes a whole lot of time because Idk i think i'm broken like that. You always help me no matter what, you're honestly the sweetest person I know. You take care of everyone around you, picking up the slack without even complaining about it and bruh when you love someone, you love them whole heartedly :3\n\nso I love you a whole lot. Just as you are there for people, I want to be there for you. I hope that when you ever need a friend and you get lost at times, even when I'm not around, this can help you. I am so happy that you're in my life, you have no idea how much you mean to me.\n\nI love you so much, Shore uwu. xx Maryam Dinzly :heart:`);
		 }
		 if (msg.author.id === "339046861409091586") {
			msg.author.send(`hihi, Cedric uwu :heart:\n\n I just want to let you know that I love you a whole lot and if you're feeling down and lost about yourself, or if shit gets hard, I just want you to realise that I love you. Why? Because you're an amazing person of course! I know you're probably thinking like NYEH no. BUT YES. You're one of the best, kindest people I know and I want you to know that all the little things you do for me, they don't go unnoticed. And those that you do for people too. You're hardworking and kind and you always see the best in people. You make sure that someone gets second chances or even third, not because you're a pushover but because you understand that sometimes mistakes are made. And I love that about you. I know that I don't regret ever meeting you. If anything, I am seriously glad you're in my life. And I hope like for all the times you've been here for me, this can be here for you when I'm not there. I am so happy to have you in my life, you have no idea how much you mean to me :pleading_face:\n\nI love you a whole lot, Lawrence. xx Maryam Dinzly :heart:`);
		 }
		 if (msg.author.id === "619781173245116426") {
			msg.author.send(`ISLAAAAAA! :heart:\n\nYou're honestly like a big sister to me, although yes I know I'm older than you HAHA. But you mean a lot to me, since the first time we met. Thanks for taking care of me, uwu. I know sometimes it gets a tiny bit hard to deal with me because I'm well, like this XD If you're ever feeling sad or down, which I know you do but you just don't talk much about it, know that I love you a whole lot. Being your best friend has brought a ton of colors into my life. You have made me a better person, even in terms of religion and I grew up realising that I never want to disappoint you. And it means alot to me that you're always kind with me, and supporting me through everything I do. I think you're amazing, heck I look up to you, because you're like a role model to me. You're not just hecka smart, but you're super kind as well and I love how you're patient uwu. I hope that when you ever need a friend, like how you're always there for me, I hope this can be here for you even when I'm not here for you. I am so happy that you're in my life, you have no idea how much you mean to me.\n\nI love you so much, Rana uwu. xx Maryam Dinzly :heart:`);
		 }
		 if (msg.author.id === "404475339327143936") {
			msg.author.send(`Hi Burrito uwu :hearts:\n\nWe've only been friends for like what, a few weeks, well really close friends and I just want to say that you've become one of the most important person to me :3 You're the most hardworking person I know, and you pretty much deserve everything in life. You're as chaotic as me heh :3 But that's not the main reason why I love you. I love you a whole lot because you're kind, and you care about people sincerely. And you know how to take charge, you're pretty much who I aspire to be but I never could compare. XD I know sometimes you might feel down, and I hope that this message can be there for you even when I can't uwu :3 I just want you to know that you're an amazing person and I'm glad you crashed into my life. You have no idea how much you mean to me.\n\nI love you a whole lot, Burrito :3 xx Maryam Dinzly :heart:`)
		 }
		 if (msg.author.id === "632493999818670091") {
			 msg.author.send(`RIVERRRRRR. Best frand uwu.\n\nHihi heh. So like, I'm not so good at pouring out my feelings but I just wanted to let you know that you have become someone I really care and love, and I just think you're awesome :3 I mean, reasons why I love you a whole lot? Well, there's much and I think if I list them down, it's neverending xD\n\nYou're amazing because you're always nice to me uwu and trust me, thats rare for someone like me. And even though you're quiet, you know how to make me feel better when I'm sad and and and you do shit ton of stupid things which made me laugh, because it's cute. I wish you'd eat a whole lot more, but thats just me. I think everyone should eat alot heh. BUT YEAH I just want to let you know that I'm glad to have met you, you pretty much have no idea how much you mean to me.\n\nI love you so much River uwu. xx Maryam Dinzly :heart:`)
		 }
		 if (msg.author.id === "313845179239104524") {
			 msg.author.send(`hihi Joel uwu! :heart: I am really glad that I took the opportunity to owl you when you first joined HEH. You've been a great friend to me so far and I just want you to know that you're amazing uwu. I mean, you helped me through a whole lot of things and even I was struggling with Quidditch, you offered to help. Which I am really, seriously grateful for and I just wanna say that I appreciate you a whole lot :3 I know it feels like sometimes I don't say it much but I do love you a lot! And you mean equally as much to me. :heart: Whenever shit gets you down, I hope that someday I'll be able to be there for you like how you're always there for me.\n\nI love you so much, Jojo. xx Maryam Dinzly`)
		 }
		 if (msg.author.id === "671158558880038922") {
			 msg.author.send(`JACKOLANTERN! hi :3 I know you once said that things can get hard at night sometimes, and I wish this could help you when you're feeling down. I just wanna let you know that you're one of the important people in your life and that you're NEVER a terrible person. I think I said this once, but terrible people never think they're terrible, you know? And I know for a fact that you're not terrible. You're one of the kindest people I've ever met. Yeah you played around and made mistakes, but honestly who doesn't? XD If people hold that against you, imma fight them. The thing is, sometimes I know that shit gets hard and you overthink, I know, I've been there. It's not easy. But look, I'm here okay, I'm always here for you no matter what. I promise I'm not going anywhere and if need be, I'll fight your demons for you. You have no idea how much you mean to me, and I've been very lucky to have met you, Lantern.\n\nI love you a whole lot, Jack. :3 xx Maryam Dinzly :heart:`)
		 }
		 if (msg.author.id === "305906783380176897") {
			 msg.author.send(`IVYIVYIVY :3 I know we've only recently became close but I just want to let you know that you're one of the most important people in my life. I'm grateful for all the times you supported me in whatever dumb things I do XD and that you're always so kind to me. You're the kindest person I have ever met, if I'm being honest. And I hope you love yourself the way others love you. Which is a whole lot. I'm glad to have you in my life. And when you're feeling down, I hope this can cheer you up someday.\n\nI love you a whole lot, Ivy uwu :3 xx Maryam Dinzly :heart:`)
		 }
	 }
 }
 
var message = msg.content.toLowerCase()

 if (message.includes('hi eboy uwu')) {
 msg.channel.send('hi ' + msg.author.toString() +' uwu!');
 }
 
 if (message.includes('can i get a yee claw')) {
 msg.channel.send('yee claw!');
 }
 
 if (message.includes('goodmorning') || message.includes('good morning')) {
		 if (msg.author.bot) return;
		 else {
			msg.channel.send(`Goodmorning uwu! Have a great day!`);
		 }
 }
 
 if (message.includes('goodnight') || message.includes('good night') || message.includes('nighty')) {
		 if (msg.author.bot) return;
		 else {
			msg.channel.send(`Goodnight uwu! Sleep well!`);
		 }
 }
 
 if (msg.content.toLowerCase().includes('eboy, help me out here')) {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`Who needs it, ${msg.author}? You gotta give me a name.`);
	}
	else {
		const taggedUser = msg.mentions.members.first();
		msg.channel.send(`hey ${ taggedUser }, ${msg.guild.members.cache.get(msg.author.id).displayName} loves you a whole lot so you'd better not forget that.`);
	}
 }

if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bot) return;
const args = msg.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

 if (command === 'uwu') {
	const words = args.join(' ');
	msg.channel.send(words.replace(/r/g,'w').replace(/s/g,'sh').replace(/l/g,'w').replace(/R/g,'W').replace(/S/g,'Sh').replace(/L/g,'W') + ' uwu');
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

 if (command === 'defenestrate') {
	var gifs = [
		'https://thumbs.gfycat.com/MistyDelectableKouprey-size_restricted.gif',
		'https://i.pinimg.com/originals/51/58/88/515888d6d7fadfd3dd0fa312ca287a34.gif'
	]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${words}!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!`);
			msg.channel.send(embed);
		}
		else {
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!`);
			msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'yeet') {
	var gifs = [
		'https://media1.tenor.com/images/42b71e0d0b5df489510e78cb4af77902/tenor.gif',
		'https://i.pinimg.com/originals/51/b3/63/51b36342fd05af0f105dab8ade046f0d.gif',
		'https://38.media.tumblr.com/8803e77ad2281c3e66bdf74ec748c23a/tumblr_n57jb9SmxO1tzixowo1_500.gif',
		'https://media.tenor.com/images/0b0a9ed3d2a8ffefda817a4c96862f95/tenor.gif',
		'https://historiasdeumotaku.files.wordpress.com/2015/06/tumblr_ndkbzr5tma1shcw33o5_500.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You yeeted **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${words}!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You yeeted **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${words}!`);
			msg.channel.send(embed);
		}
		else {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You yeeted **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!`);
			msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'slap') {
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
		'https://i.makeagif.com/media/10-13-2015/kTH4sW.gif',
		'https://i.imgur.com/VW0cOyL.gif',
		'https://media0.giphy.com/media/xT9IgzTnZHL9zp6IPS/source.gif',
		'https://media.giphy.com/media/3oEduOWVxygmeDIKPu/giphy.gif',
		'https://thumbs.gfycat.com/EarnestAshamedIndochinesetiger-max-1mb.gif',
		'https://i.gifer.com/WOQM.gif',
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
			.setFooter(`Oof, do I see a handprint mark on your face, ${taggedUser.username}?`);
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
 
 if (command === 'fuck') {
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
		'https://media.giphy.com/media/7CXIp5bcit6ZG/200_d.gif'
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
 
 if (command === 'smooch') {
if (!msg.channel.nsfw) {
	return msg.channel.send(`Go to the NSFW channel, ${msg.author}!`);
}
else {
	var gifs = [
		'https://media.discordapp.net/attachments/671388130712223815/718507721158164690/200.gif',
		'https://media.giphy.com/media/of7ly2wRNo6Kk/giphy.gif',
		'https://media.giphy.com/media/1g1cnnIbR3JkdUJR5A/giphy.gif',
		'https://media1.tenor.com/images/3e93b32d896a23365b727c8ec8576163/tenor.gif',
		'https://i.gifer.com/Pag6.gif',
		'https://media1.tenor.com/images/6b9d2a780070deaa6168930bfdae64f2/tenor.gif',
		'https://i.pinimg.com/originals/5c/9e/bf/5c9ebf04775941600df653b60cd03041.gif',
		'https://media0.giphy.com/media/11JwraRupZNJSg/giphy.gif',
		'https://media.giphy.com/media/SRbVg86icBP9K/200.gif'
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
			.setFooter(`That was some... wew, damn.\r\n${msg.guild.members.cache.get(msg.author.id).displayName} smooched themselves ${smooch} times.`);
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
 
 if (command === 'kiss') {
	var gifs = [
		'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif',
		'https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif',
		'https://media.giphy.com/media/JYpVJEcNrDAWc/giphy.gif',
		'https://media1.tenor.com/images/f03f245e14fdfcacaf06318cdc667a03/tenor.gif',
		'https://thumbs.gfycat.com/AgedWhisperedBarnacle-small.gif',
		'https://66.media.tumblr.com/60c27235f6440d9d6ebd8168bb75c384/tumblr_nxd3nn8iJ81rcikyeo1_500.gif',
		'https://media1.tenor.com/images/6bd9c3ba3c06556935a452f0a3679ccf/tenor.gif',
		'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
		'https://78.media.tumblr.com/44716773d1a091d4b84efbae296ab062/tumblr_or61zhEUtM1skak2ao1_500.gif',
		'https://49.media.tumblr.com/ac7e6f5ee22260439ceb89b67d57b6cb/tumblr_mwwkjpb5rh1src1c6o1_500.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kissed **${words}**! AwA, so cute!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Such cuteness uwu!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {		
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
		.setDescription(`You kissed **${taggedUser.displayName}**! AwA, so cute!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Such cuteness uwu!`);
		msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'peck') {
	var gifs = [
		'https://media1.tenor.com/images/ea51c3a083c73bf81a3c5ee6d4165115/tenor.gif',
		'https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif',
		'https://media.tenor.com/images/de18124ebe36764446ee2dbf54a672bf/tenor.gif',
		'https://thumbs.gfycat.com/PopularHideousAcornweevil-size_restricted.gif',
		'https://thumbs.gfycat.com/FatalHarmfulCormorant-size_restricted.gif',
		'https://media.tenor.com/images/48ddb8f9bd0580697882ae5e0d70b080/tenor.gif',
		'https://cutewallpaper.org/21/anime-kiss-on-the-cheek/Anime-Kiss-On-The-Cheek-Gif.gif',
		'https://media.tenor.com/images/2346a83cb600c3a8feb4000d515b7c0c/tenor.gif',
		'https://media.tenor.com/images/dc8e3ebf72fa8fd34523aa8d99a72ad4/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You pecked **${words}'s** cheeks!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Such cuteness uwu!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You pecked your own cheek, how even?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Cheeksies uwu :3`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You pecked **${taggedUser.displayName}'s** cheeks!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Such cuteness uwu!`);
			msg.channel.send(embed);
		}
	}
 }
 
 if (command === 'kick') {
	var gifs = [
		'https://media1.tenor.com/images/15a74d10bb6dce11476acfdefe614540/tenor.gif',
		'https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif',
		'https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif',
		'https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif',
		'https://media1.tenor.com/images/d4bd24c980e46c66f67077aff59f0565/tenor.gif',
		'https://i.gifer.com/1UDX.gif',
		'https://i.pinimg.com/originals/0c/09/21/0c09214c4df0c7b2a8f6870144972a82.gif',
		'https://media.tenor.com/images/64bd964e32d1c943801743aaf0565f25/tenor.gif',
		'https://media1.tenor.com/images/1f8c90e5efbd0bbdf0d385ef4f85c9e9/tenor.gif',
		'https://i.pinimg.com/originals/d4/37/1c/d4371ceac00951149b514e172e9dd64c.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked **${words}**! Ouch!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${words}?`);
			msg.channel.send(embed);	
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked yourself! How even?!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked **${taggedUser.displayName}**! Ouch!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?`);
			msg.channel.send(embed);			
		}
	}
 }
 
 if (command === 'hug') {
	var gifs = [
		'https://media1.tenor.com/images/baa6f59f4b89bfff1ff9a22421eb02a6/tenor.gif',
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
		'https://i.gifer.com/GaYY.gif',
		'https://66.media.tumblr.com/85d8161c57f92c9b50590d7605b34e4e/tumblr_inline_pq885e8o7T1v8hwtj_540.gif',
		'https://media1.giphy.com/media/117o9BJASzmLNC/giphy.gif',
		'https://i.gifer.com/RhzY.gif',
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
 
 if (command === 'tonk') {
	var gifs = [
		'https://media1.tenor.com/images/00ad8957bf40ba1efecd71c70f4f6f70/tenor.gif',
		'https://media1.tenor.com/images/b515120c09f3db63ba456c6b45be5066/tenor.gif',
		'https://i.imgur.com/LnGPvPw.gif',
		'https://media.tenor.com/images/003c5629319c1ef6c13f181cdccfbece/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked **${words}**! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${words}?`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked yourself! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked **${taggedUser.displayName}**! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?`);
			msg.channel.send(embed);

		}
	}
 }
 
 
 if (command === 'untonk') {
	var gifs = [
		'https://s4.gifyu.com/images/untonk1.gif',
		'https://s4.gifyu.com/images/untonk2.gif',
		'https://s4.gifyu.com/images/tonk3.gif',
		'https://s6.gifyu.com/images/tonk4.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You untonked **${words}**! So nice AwA!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${words} is now UNTONKED.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You untonked yourself! Yeah, no tonking!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`You are now UNTONKED.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You untonked **${taggedUser.displayName}**! So nice AwA!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is now UNTONKED.`);
			msg.channel.send(embed);

		}
	}
 }
 
 if (command === 'patpat') {
	var gifs = [
		'https://media.tenor.com/images/8237d7da8cbd7227d67d735d437612cf/tenor.gif',
		'https://media.tenor.com/images/67dc5a58a23461f3f449e8f46623b1df/tenor.gif',
		'https://media3.giphy.com/media/M3a51DMeWvYUo/giphy.gif',
		'https://66.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gif',
		'https://66.media.tumblr.com/d743a5e5ecc65be5cb6ac8de7978fb22/tumblr_pfyit1ofSu1th206io1_500.gif',
		'https://i.imgur.com/2lacG7l.gif',
		'https://archive-media-0.nyafuu.org/c/image/1501/69/1501696680832.gif',
		'https://data.whicdn.com/images/295195659/original.gif',
		'https://gifimage.net/wp-content/uploads/2018/04/pat-gif-3.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You patpats smol **${words}** UwU`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${words} is patted uwu.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You patpats yourself! Okay?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is patted uwu.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You patpats smol **${taggedUser.displayName}** UwU`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is patted uwu.`);
			msg.channel.send(embed);

		}
	}
 }
 
 if (command === 'punch') {
	var gifs = [
		'https://66.media.tumblr.com/06f9c15ef14eea0140fff2800889eb68/tumblr_nmifhe4pyE1tb8iyko1_400.gif',
		'https://media.giphy.com/media/D9AJVEMgXAhlm/giphy.gif',
		'https://gifimage.net/wp-content/uploads/2017/09/anime-punch-gif-6.gif',
		'https://i.pinimg.com/originals/bb/6b/8e/bb6b8e07c31e7ab9f481240e97704020.gif',
		'https://cdn159.picsart.com/228190013051202.gif',
		'https://3.bp.blogspot.com/-f2C5CBKw05A/W95nlOPZ4HI/AAAAAAABXVo/eU16NRt_qQIh64c3AvSScDYuRL2H6lAegCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BFairy%2BTail%2BFinal%2BSeason%2B-%2BEpisode%2B282%2B-%2BLucy%2BPunch.gif',
		'https://pa1.narvii.com/6335/c697f13cfc2ff482fd2970fb205fd7d23d57dc32_hq.gif',
		'https://1.soompi.io/wp-content/uploads/2014/07/kim-soo-hyun-secretly-greatly-punch.gif',
		'https://media1.tenor.com/images/288b7338acc44e10004a1063dc5fc521/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You punched **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
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
			.setDescription(`You punched **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!`);
			msg.channel.send(embed);

		}
	}
 }
 
 if (command === 'boop') {
	var gifs = [
		'https://media2.giphy.com/media/oeYpYm0BOEDWo/giphy.gif',
		'https://imgur.com/QDkTaFe.gif',
		'https://media.giphy.com/media/12BGUcW8xxpPRS/giphy.gif',
		'https://media.giphy.com/media/Mf4NqZAknusBq/giphy.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You booped **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Boop bap.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You booped yourself! AwA cute.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Boop bap.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You booped **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Boop bap.`);
			msg.channel.send(embed);

		}
	}
 }
 
 
 if (command === 'snuggle' || command === 'snuggles') {
	var gifs = [
		'https://media.giphy.com/media/kz01wlAoCLYx3v8F68/giphy.gif',
		'https://i.gifer.com/DQp.gif',
		'https://25.media.tumblr.com/tumblr_m1x1jtIXWQ1qf5ddxo1_500.gif',
		'https://media.tenor.com/images/215f87079f12bccd5dd56def22140668/tenor.gif',
		'https://media.tenor.com/images/b38e8de408c8c3581ee75713d30db469/tenor.gif',
		'https://media.tenor.com/images/57559abb91934c8aaa325a71b0d01706/tenor.gif',
		'https://media.giphy.com/media/3ohhwHAKGA0ilFZrkQ/giphy.gif',
		'https://media.giphy.com/media/f4YPX09pxYGkM/giphy.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You snuggled **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Snugglesnuggle!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You snuggled yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Snugglesnuggle.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You snuggled **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Snugglesnuggle!`);
			msg.channel.send(embed);

		}
	}
 }
 
 
 if (command === 'drag') {
	var gifs = [
		'https://media.tenor.com/images/fcb3f477cd25d365c800a0e9826c0921/tenor.gif',
		'https://media.giphy.com/media/LModbUFxtnw9q/giphy.gif',
		'https://media1.tenor.com/images/8424903ed8b4219cee83a1417e59e20b/tenor.gif',
		'https://media2.giphy.com/media/LXJ4hM0NB1GSs/giphy.gif',
		'https://media.tumblr.com/ecde59f4dc9a34e3876643a57cb345a9/tumblr_inline_mpq7mtdWgz1qz4rgp.gif',
		'https://i.pinimg.com/originals/64/c7/44/64c744f80082fb6e002cf4824655a19a.gif',
		'https://media1.tenor.com/images/900b9598601e8875034b075f5a7bcd29/tenor.gif',
		'https://media.tenor.com/images/ff8058ad37789799f2c58324b8a030a5/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You dragged **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Bye bye, ${words} XD`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You dragged yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Weeee~`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You dragged **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Bye bye, ${taggedUser.displayName} XD`);
			msg.channel.send(embed);

		}
	}
 }
 

 if (command === 'love') {
	var gifs = [
		'https://media2.giphy.com/media/yc2pHdAoxVOrJ2m5Ha/200.gif',
		'https://media3.giphy.com/media/hqTwf417EvUWeV0XcX/giphy.gif',
		'https://media2.giphy.com/media/kG3kzEP6BCpyg0YNMi/giphy.gif',
		'https://media.giphy.com/media/l4pTdcifPZLpDjL1e/giphy.gif',
		'https://data.whicdn.com/images/293095869/original.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} loves **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`We all love you too, **${words}**!`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`I love myself uwu`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`It's good to love yourself.`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} loves you, **${taggedUser.displayName}**! I love you.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`We all love you too, **${taggedUser.displayName}**!`);
			msg.channel.send(embed);

		}
	}
 } 
 


 if (command === 'console') {
	var gifs = [
		'https://thumbs.gfycat.com/RemarkableUnluckyBlackpanther-small.gif',
		'https://media.giphy.com/media/C1Fdach2R4HSg/giphy.gif',
		'https://media1.tenor.com/images/2dc14e2010a0bc4786b36a3dfc2fab69/tenor.gif',
		'https://media1.tenor.com/images/eb106be6f33b022bb34781e741e74db9/tenor.gif',
		'https://media1.tenor.com/images/0fb5e945c195639dc28f761fd018605b/tenor.gif',
		'https://media1.tenor.com/images/0c46c6ebe4e822eaa33771bc110de2f9/tenor.gif',
		'https://i.giphy.com/rSNAVVANV5XhK.gif',
		'https://i.imgur.com/08LC0RH.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} consoled **${words}**! There, there, don't be sad. We're here for you.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Aww, don't be sad. ${msg.guild.members.cache.get(msg.author.id).displayName} got your back okay? :heart:`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You consoled yourself. It'll be okay, I promise.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`You're gonna be okay, I promise :3`);
			msg.channel.send(embed);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} consoled **${taggedUser.displayName}**! There, there, don't be sad. We're here for you.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Aww, don't be sad. ${msg.guild.members.cache.get(msg.author.id).displayName} got your back okay? :heart:`);
			msg.channel.send(embed);

		}
	}
 } 


 
 if (command === 'kill') {
	var gifs = [
		'https://i.pinimg.com/originals/06/de/3a/06de3a0af78355bf7d4774cda4e4180e.gif',
		'https://media1.tenor.com/images/2da282c6034d91db471f81d29eb691d9/tenor.gif',
		'https://media1.tenor.com/images/f16e5bcbac25180fa09b9d5c405b3f95/tenor.gif',
		'https://pa1.narvii.com/6559/c8d88737c0eb45dd9f967b04dcbd414a17b8b570_hq.gif',
		'https://i.pinimg.com/originals/4d/6b/0f/4d6b0f94e42656e9ada7d9833409cb75.gif',
		'https://thumbs.gfycat.com/EminentSlowClownanemonefish-size_restricted.gif',
		'https://pa1.narvii.com/5741/4b70053325cbf1fd616dfda66a49210e72b23027_hq.gif',
		'https://thumbs.gfycat.com/AdorableGivingCrayfish-max-1mb.gif',
		'https://media1.tenor.com/images/d3a3e21de3393b6a3b4f16247e283e7b/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${words} is dead! I'll revive them soon uwu.`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is dead! I'll revive them soon uwu.`);
			msg.channel.send(embed);
		}
		else {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is dead! I'll revive them soon uwu.`);
			msg.channel.send(embed);

		}
	}
 }  
 
 if (command === 'bite') {
	var gifs = [
		'https://media1.tenor.com/images/c91f7e6ca3f5c157c5e6f6e4ea2e364c/tenor.gif',
		'https://media1.tenor.com/images/283b04320ccd718991714e38953f06d1/tenor.gif',
		'https://media1.giphy.com/media/7NUDCypKavZzkQGyp9/giphy.gif',
		'https://media.giphy.com/media/mEMRAZYygRyk8/giphy.gif',
		'https://media.giphy.com/media/Cvx6i8tQDTHEI/200.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You bit **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`LMAO, does ${words} look like food to you?`);
			msg.channel.send(embed);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You bit yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you hungry, ${taggedUser.displayName}? Don't eat yourself smh.`);
			msg.channel.send(embed);
		}
		else {	
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You bit **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`LMAO, does ${taggedUser.displayName} look like food to you?`);
			msg.channel.send(embed);
		}
	}
 }  

 if (command === 'byebye') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		let taggedUser = msg.mentions.members.first();
		  taggedUser.kick().then((taggedUser) => {
					// Successmessage
					msg.channel.send("byebye!");
				}).catch(() => {
					 // Failmessage
					msg.channel.send(`NOPE, no byebye. ${taggedUser.displayName} isn't going anywhere.`);
				});
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
 
 if (command === 'spazz') {
		var gifs = [
			'https://vicariousbookworm.files.wordpress.com/2018/09/tenor.gif',
			'https://i.pinimg.com/originals/c5/94/6f/c5946fa77bf152d8af6f899833829ad0.gif',
			'https://cdn41.picsart.com/170301162000202.gif',
			'https://media.tenor.com/images/c928b5474e688bfaa8108b6e04e043dd/tenor.gif',
			'https://media.tenor.com/images/e5993e389cd5667789c957c05aee7c5c/tenor.gif',
			'https://media.giphy.com/media/Rv0zzokgDrg4M/200.gif',
			'https://thumbs.gfycat.com/VeneratedBlackHoneycreeper-size_restricted.gif',
			'https://i.gifer.com/1hG9.gif',
			'https://media1.popsugar-assets.com/files/thumbor/hPm4dv68O0i8Vyb2kBA8XQ84yLM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/04/08/925/n/1922283/eeac818b5cd5bb2d_anigif_enhanced-buzz-20962-1384956300-31/i/She-jumps-she-screams-you-know-happy-person.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`sdjkfhsajkfhsdaj SO CUTE`)
		.setImage(randomgif)
		.setFooter(`AAAAAAH SPAZZ SPAZZ OMLL EFHFJHK`);
		msg.channel.send(embed);
 }
 
 if (command === 'scared') {
		var gifs = [
			'https://media.tenor.com/images/e3c2bee74806139d56d7c08b2b15d333/tenor.gif',
			'https://media.tenor.com/images/91843c93a618cbed9741ee1531025639/tenor.gif',
			'https://media.tenor.com/images/55c089a4480108dde4b5bec69b48be5b/tenor.gif',
			'https://media.tenor.com/images/e4cb8ee5ef75b8eed31dbc173fdd6e6a/tenor.gif',
			'https://media.giphy.com/media/HkUey32gK29RS/giphy.gif',
			'https://i.pinimg.com/originals/11/9b/d8/119bd8a40a0e4df6dce5695be9ee8bc6.gif',
			'https://i2.kym-cdn.com/photos/images/newsfeed/001/070/220/b2d.gif',
			'https://i.gifer.com/NJwK.gif',
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
 
 if (command === 'sleep') {
		var gifs = [
			'https://media1.tenor.com/images/a7e8e8f9fd0a8784012d8f14b09da4a8/tenor.gif',
			'https://66.media.tumblr.com/9a0efe3d6c1516214e3b3ffce5a51c78/tumblr_os2qsvffPq1qzxv73o1_400.gif',
			'https://media1.tenor.com/images/7355297a8feac260037d4109758d3be8/tenor.gif',
			'https://i.pinimg.com/originals/ca/dd/f1/caddf1ef532d286996080f27f71f87d2.gif',
			'https://gifimage.net/wp-content/uploads/2018/05/sleep-anime-gif-4.gif',
			'https://media.tenor.com/images/b954c0ad5c0457d464eb6c2a8f504a73/tenor.gif',
			'https://media3.giphy.com/media/Ml8ZIPp2dDmaA/source.gif',
			'https://media.tenor.com/images/62f71c86005b866fc87a3a7ef1d5038a/tenor.gif',
			'https://i.gifer.com/QC9r.gif',
			'https://i.pinimg.com/originals/f1/0c/5f/f10c5fcdb94355b83c54eb156f5b4866.gif',
			'https://33.media.tumblr.com/2c2d94ebae4db3569a369ca823f198d4/tumblr_ntqwcuHf6k1tvgytqo1_400.gif',
			'https://67.media.tumblr.com/31769f4d42a89d3641021f4a722a79de/tumblr_nv5vd05KLE1tzv1dpo1_500.gif',
			'https://media.tenor.com/images/e7ea73ed83e59cdd198d6ecbe8eeb170/tenor.gif',
			'https://25.media.tumblr.com/47c0340672e7b03207b4f3b895bd77ee/tumblr_mmrgjsy0zE1s89hgko1_400.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Feeling sleepy? Go to sleep smh.`)
		.setImage(randomgif)
		.setFooter(`*puts blanket on you* Goodnighty uwu!`);
		msg.channel.send(embed);
 }
 
 if (command === 'eat') {
		var gifs = [
			'https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif',
			'https://i.pinimg.com/originals/fd/d2/2f/fdd22fe6112b90d08d6c63aa53d0762d.gif',
			'https://media1.tenor.com/images/80e45406f5386242fe7699badd51b342/tenor.gif',
			'https://media.giphy.com/media/rDZuJKhOcLTEI/200w.gif',
			'https://thumbs.gfycat.com/ContentFrenchBadger-size_restricted.gif',
			'https://66.media.tumblr.com/465fd76d4ac2dc7c6cb492f394f8c743/tumblr_oa2k3wiMsY1smufyzo1_400.gif',
			'https://gifimage.net/wp-content/uploads/2018/04/kirby-eating-gif-8.gif',
			'https://i.gifer.com/TJrF.gif',
			'https://media1.tenor.com/images/21f1f30024f331959b1c7818a7aa0136/tenor.gif',
			'https://media.giphy.com/media/ViC6liI1iz3TGxb4po/giphy.gif',
			'https://i.pinimg.com/originals/db/a1/fc/dba1fca1c27106c53b04ee2333099217.gif',
			'https://media0.giphy.com/media/9n4muqn344LMA/source.gif',
			'https://gifimage.net/wp-content/uploads/2017/11/eating-anime-gif-2.gif',
			'https://media3.giphy.com/media/vh4GM3DcAC9cA/giphy.gif',
			'https://gifimage.net/wp-content/uploads/2017/11/eating-anime-gif-14.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Omnomnomnom.`)
		.setImage(randomgif)
		.setFooter(`Eat eat eat eat yes :3`);
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
			'https://media.tenor.com/images/1186d85399c24953459c7d516f57f346/tenor.gif',
			'https://66.media.tumblr.com/df182d407162f72277331c7843316225/tumblr_p3n2reSZNE1uku9tco5_500.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Are you okay? :(`)
		.setImage(randomgif)
		.setFooter(`Don't cry :( We're here for you. :heart:`);
		msg.channel.send(embed);
 }
 
 if (command === 'angry') {
		var gifs = [
			'https://i.pinimg.com/originals/b3/96/e0/b396e0fd1ced8ad36545a9094c5218ad.gif',
			'https://i.pinimg.com/originals/01/48/a2/0148a2c426e64d9ce20db34779832197.gif',
			'https://media0.giphy.com/media/FAI5TtHYYEges/giphy.gif',
			'https://cdn.shopify.com/s/files/1/0318/2649/files/tenor-1_776d86a0-7df7-415c-b5e7-5b5af686ff5a_large.gif',
			'https://media.giphy.com/media/l3fZONy55gOZacqD6/giphy.gif',
			'https://media.tenor.com/images/41c8e606a1e4c3b5d1239afd593d062b/tenor.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`yikes, ${msg.guild.members.cache.get(msg.author.id).displayName} is angry!`)
		.setImage(randomgif)
		.setFooter(`Everyone, back away!`);
		msg.channel.send(embed);
 }
 
 if (command === 'dance') {
		var gifs = [
			'https://media.tenor.com/images/7fa3b39ddac5925af0d81aefeeeb3ad4/tenor.gif',
			'https://gifimage.net/wp-content/uploads/2017/10/dance-anime-gif-7.gif',
			'https://media.giphy.com/media/6k6iDdi5NN8ZO/giphy.gif',
			'https://media.giphy.com/media/mJIa7rg9VPEhzU1dyQ/giphy.gif',
			'https://pa1.narvii.com/5676/e928b2e40a76e21f334651ec0ed71cfc0c8c6835_hq.gif',
			'https://cutewallpaper.org/21/anime-boy-and-girl-dancing/Animated-gif-about-cute-in-AyoDAIaIs-Eo-AIaEIaNIa-by-airi.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`Dance dance dance!`)
		.setImage(randomgif)
		.setFooter(`Let's dance together uwu!`);
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
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is throwing a tantrum.`)
		.setImage(randomgif)
		.setFooter(`Aww, what's wrong, ${msg.guild.members.cache.get(msg.author.id).displayName}?`);
		msg.channel.send(embed);
 }


 if (command === 'scream') {
		var gifs = [
			'https://media.giphy.com/media/qFi3fACSMnP4Q/giphy.gif',
			'https://38.media.tumblr.com/d9bf97c7aee862ca4858e20122043662/tumblr_nt6f20RFxb1sgl0ajo1_500.gif',
			'https://i.pinimg.com/originals/0d/52/17/0d52176ac1ea9f1be10b5e767493888a.gif',
			'https://66.media.tumblr.com/276977220659dd7969104412605a8a52/tumblr_inline_oyw96aoUdt1us06yu_540.gif',
			'https://thumbs.gfycat.com/LegitimateAnchoredBoa-size_restricted.gif',
			'https://i.pinimg.com/originals/55/83/06/5583064ed9d58208e0460e2519a1d559.gif',
			'https://66.media.tumblr.com/ccfb2a25f87c6e336edd0baf759990fc/tumblr_por8zyKOU81qjlx7n_500.gif',
			'https://reactiongifs.me/wp-content/uploads/2018/06/Angry-Anger_63403.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is screaming.`)
		.setImage(randomgif)
		.setFooter(`blinks blinks. That was scary.`);
		msg.channel.send(embed);
 }
 
 if (command === 'yoink') {
		var gifs = [
			'https://media1.giphy.com/media/5cdenDXni65aM/giphy.gif',
			'https://media.giphy.com/media/VSiNfsl8VIRIk/giphy.gif',
			'https://media.giphy.com/media/ofHpfBbgXhEVG/giphy.gif',
			'https://media1.tenor.com/images/63af4cb08b86163f4ff2a7997d1ac7dc/tenor.gif',
			'https://iruntheinternet.com/lulzdump/images/cat-steal-streat-under-couch-paw-steal-snide-14238627235.gif',
			'https://media.tenor.com/images/1f44eb631e8b9b4cd65e3d35ac00c04b/tenor.gif',
			'https://media1.tenor.com/images/482d0bce20389f7395948a0f52b670ee/tenor.gif',
			'https://media1.tenor.com/images/ee5f77dab6dc52a84666f9516b49f7bf/tenor.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`${msg.guild.members.cache.get(msg.author.id).displayName} is stealing. Be careful of your stuffs and pets!`)
		.setImage(randomgif)
		.setFooter(`SWIPER NO SWIPING!`);
		msg.channel.send(embed);
 }

/*  if (command === 'test') {
	if (eboys.some(eboy => eboy.id === msg.author.id)) {
		let result = eboys.filter(obj => {
		  return obj.id === msg.author.id
		});
		eboys.push({ id: msg.author.id, tantrum: result.tantrum + 1 });
		var e = 'yes';
	}
	else {
		eboys.push({ id: msg.author.id, tantrum: 1 });
	}
	msg.channel.send(eboys);
 } */
 
if (command === 'search') {
	var definition = args.join(' ');;
	
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
		{ name: 'main commands', value: 'uwu\r\nowo\r\nawa\r\nòwó\r\nhi eboy uwu\r\ncan i get a yee claw\r\nuwu uwu <words to uwuify>\r\nuwu search <word to search>' },
		{ name: 'information about eboy (type in the following)', value: 'why are you called eboy?\r\neboy, who built you?' },
		{ name: 'uwu <commands> @<username>', value: 'bite\r\nboop\r\nconsole\r\ndrag\r\ndefenestrate\r\nhug\r\nkick\r\nkill\r\nkiss\r\nlove\r\npatpat\r\npeck (aka peck on the cheeks)\r\npunch\r\nslap\r\nsnuggle\r\ntonk\r\nuntonk\r\nyeet' },
		{ name: 'uwu <commands>', value: 'angry\r\ncry\r\ncelly\r\ndance\r\neat\r\nscared\r\nscream\r\nsleep\r\nspazz\r\ntantrum\r\nyoink' },
		{ name: 'uwu <commands> @<username> ONLY ALLOWED IN NSFW CHANNELS (also there are gay stuffs, so if youre not comfortable with it, dont use it.)', value: 'smooch (aka french kiss/steamy kiss)\r\nfuck' },
		{ name: 'special commands', value: 'to cheer someone up and tell them that you love them:\r\n"eboy, help me out here @<username>"\r\nto kick someone out of the server: uwu byebye @<username>' },
		)
		.setFooter(`Created by Maryam#9206`);
		msg.channel.send(embed);
 }
 
 });

client.login(process.env.token);