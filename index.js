const Discord = require('discord.js');
const ud = require('urban-dictionary');
const client = new Discord.Client({disableEveryone: false});
const prefix = "uwu ";
const fs = require('fs').promises;
const path = require('path');


client.commands = new Map();

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
	if (guild.id === "733541632275644427") {
		client.channels.cache.get("733541632275644430").send(`Hihi **${member.displayName}**, welcome to Carcosa and World of Eldritch County!\n\nPlease head yourself to <#733542476035653643> to introduce yourself so that others can get to know you better! And then don't forget to head yourself to <#733551174250266729> as well! \n\nI hope you have fun and I'm really glad that you're in Carcosa :heart: <:meow:733551416114937856>`);
		member.roles.add(member.guild.roles.cache.find(x => x.id == "733542068563083285"), "");
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
 
 if (msg.content.toLowerCase() === 'eboy, can i have the diary please?') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('uwu yes, ' + msg.author.toString() +'! Here is the diary, please take care of it. :heart:');
/* 		 if (msg.author.id === "630803907181936641") {
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
		 } */
/* 		 if (msg.author.id === "279101053750870017") {
			 msg.author.send(`Dear Diary,\n\nIt's 17 July 2020 and this is probably a stupid thing I'm doing here, I don't know. But like I'm not good with words but I am seriously good with diaries, so here we go :3\n\nIt's been what, a month? Since I met this cute guy named Larentius on WoP. I mean it was highkey funny because the thing was I have had a crush on him since like nearing the end of second year but my awkward ass don't know what to do about it. But guess what, I actually had the courage to owl him which was yeah wow. I mean okay I made up some stupid reason about wanting to know his timezone, which yeah cool conversation starter huh? XD\n\nAnyway, yeah one month. and if i'm being honest, I never thought anything would developed other than friendship? I dont know, I've pretty much given up on people other than my best friends and meeting Larentius was like... scary? Because it's one more person who might leave, you know? But then idk somewhere along the journey, I fell for him. HARD. It was dumb. I was dumb pretty much because who falls for someone just because they're nice to them. Me apparently. But you see, diary, Laren isn't just nice. He's smart, and a really good writer. And he's sweet too, without putting in much effort. And to be honest, I dont quite know what I did in life to deserve him?\n\nI mean if you ask me to list out all the reasons why I love him, it's probably too much but the thing about Larentius is that he's... amazing. I don't think I have ever met anyone quite like him. He's a really good writer but he doesn't give himself much credit. And for someone who is terrified of people or rather talking to people, his feedbacks to strangers, like actual complete strangers are really fucking sweet. And he always sends me these sweet goodnight texts and you wanna know what the cool part is? I rarely have nightmares anymore these days. But I dont know how to say that. How do you say hey you're an amazing person and you kinda made my nightmares go away. It's like yeah I wake up at ungodly hours and I see those sweet texts and idk sometimes I just cry because I dont think I deserve them. Sometimes I wish he would realise how precious he is.\n\nI'm pretty much dumb at relationships, it's been known since forever and I don't know what we are but like what I do know is that at this moment in time, no matter how ridiculously unrealistic it sounds, I pretty much would want to spend the rest of my life with him. The thing is I dont know how to tell him that I am really, seriously, honestly, about 500 percent, madly in love with him, because what if I do and he runs away? XD yeah.\n\nTbh, I'm not quite sure what is the point of this thing that I'm doing. The diary I mean. Too much emotions XD skagjdsgaaksdgjk. But idk I just need to let it out or I'll explode and I think Roman and Isla have had enough of me being a giddy dumbass while talking about Laren. Okay maybe not, but I dont wanna be an annoyance so yeah.\n\nWould it be bad to wish that he would stay forever? Kinda selfish I know, but wish upon a star okay? :pleading_face: \n\n a rambling mess, Maryam.`)
		 } */
		 if (msg.author.id === "332123726864973837") {
		     msg.author.send(`Dear Diary,\n\nIt's 17 July 2020 and this is probably a stupid thing I'm doing here, I don't know. But like I'm not good with words but I am seriously good with diaries, so here we go :3\n\nIt's been what, a month? Since I met this cute guy named Larentius on WoP. I mean it was highkey funny because the thing was I have had a crush on him since like nearing the end of second year but my awkward ass don't know what to do about it. But guess what, I actually had the courage to owl him which was yeah wow. I mean okay I made up some stupid reason about wanting to know his timezone, which yeah cool conversation starter huh? XD\n\nAnyway, yeah one month. and if i'm being honest, I never thought anything would developed other than friendship? I dont know, I've pretty much given up on people other than my best friends and meeting Larentius was like... scary? Because it's one more person who might leave, you know? But then idk somewhere along the journey, I fell for him. HARD. It was dumb. I was dumb pretty much because who falls for someone just because they're nice to them. Me apparently. But you see, diary, Laren isn't just nice. He's smart, and a really good writer. And he's sweet too, without putting in much effort. And to be honest, I dont quite know what I did in life to deserve him?`)
			 msg.author.send(`I mean if you ask me to list out all the reasons why I love him, it's probably too much but the thing about Larentius is that he's... amazing. I don't think I have ever met anyone quite like him. He's a really good writer but he doesn't give himself much credit. And for someone who is terrified of people or rather talking to people, his feedbacks to strangers, like actual complete strangers are really fucking sweet. And he always sends me these sweet goodnight texts and you wanna know what the cool part is? I rarely have nightmares anymore these days. But I dont know how to say that. How do you say hey you're an amazing person and you kinda made my nightmares go away. It's like yeah I wake up at ungodly hours and I see those sweet texts and idk sometimes I just cry because I dont think I deserve them. Sometimes I wish he would realise how precious he is.\n\nI'm pretty much dumb at relationships, it's been known since forever and I don't know what we are but like what I do know is that at this moment in time, no matter how ridiculously unrealistic it sounds, I pretty much would want to spend the rest of my life with him. The thing is I dont know how to tell him that I am really, seriously, honestly, about 500 percent, madly in love with him, because what if I do and he runs away? XD yeah.\n\nTbh, I'm not quite sure what is the point of this thing that I'm doing. The diary I mean. Too much emotions XD skagjdsgaaksdgjk. But idk I just need to let it out or I'll explode and I think Roman and Isla have had enough of me being a giddy dumbass while talking about Laren. Okay maybe not, but I dont wanna be an annoyance so yeah.\n\nWould it be bad to wish that he would stay forever? Kinda selfish I know, but wish upon a star okay? :pleading_face: \n\n a rambling mess, Maryam.`)
		 }
	 }
 }
 
var message = msg.content.toLowerCase()

 if (message.includes('hi eboy uwu')) {
 msg.channel.send('hi ' + msg.author.toString() +' uwu!');
 }
    
 if (message.includes('eboy, i love you') || message.includes('eboy i love you')) {
 msg.channel.send('I love you too, ' + msg.author.toString() +' uwu! :heart:');
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
const args = msg.content.slice(prefix.length).split(new RegExp(/\s+/));
const command = args.shift().toLowerCase();

 if (command === 'uwu') {
	const words = args.join(' ');
	msg.channel.send(words.replace(/r/g,'w').replace(/s/g,'sh').replace(/l/g,'w').replace(/R/g,'W').replace(/S/g,'Sh').replace(/L/g,'W') + ' uwu');
}

/*  if (command === 'banner') {
	const words = args.join(' ');
	msg.channel.send(words.replace(/r/g,'w').replace(/s/g,'sh').replace(/l/g,'w').replace(/R/g,'W').replace(/S/g,'Sh').replace(/L/g,'W') + ' uwu');
} */

// -----------------------------------------------------------------------------------------------------------------------------------------------------

 if(client.commands.get(command)) {
	 client.commands.get(command).run(client, msg, args).catch((e) => { console.log(e); });
 }

//-----------------------------------------------------------------------------------------------------------------------------------------
 
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


if (command === 'flower') {

}


 if (command === 'match') {
 }

 
 if (msg.content === '@eboy help' || command === 'help' || command === 'command' || command === 'commands') {
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`Commands`)
		.setDescription('Thank you for using Eboy bot uwu! (∩•̀ω•́)⊃-⋆')
		.addFields(
		{ name: 'main commands', value: 'uwu\r\nowo\r\nawa\r\nòwó\r\nhi eboy uwu\r\neboy, i love you\r\ncan i get a yee claw\r\nuwu uwu <words to uwuify>\r\nuwu search <word to search>' },
		{ name: 'information about eboy (type in the following)', value: 'why are you called eboy?\r\neboy, who built you?' },
		{ name: 'uwu <commands> @<username>', value: 'bite\r\nboop\r\ncling\r\nconsole\r\ndefenestrate\r\ndrag\r\nhug\r\nkick\r\nkill\r\nkiss\r\nlove\r\npatpat\r\npeck (aka peck on the cheeks)\r\npunch\r\nscold\r\nshake\r\nslap\r\nsnuggle\r\nsummon\r\ntackle\r\ntonk\r\nuntonk\r\nyeet' },
		{ name: 'uwu <commands>', value: 'axe\r\nangry\r\ncelly\r\nclap\r\nconfused\r\ncry\r\ndance\r\ndrink\r\neat\r\new\r\nflop\r\nhide\r\nhydrate\r\nlaugh\r\nscared\r\nscream\r\nsleep\r\nspazz\r\ntantrum\r\nyoink' },
		{ name: 'uwu <commands> @<username> ONLY ALLOWED IN NSFW CHANNELS (also there are gay stuffs, so if youre not comfortable with it, dont use it.)', value: 'choke\r\nfuck\r\nsmooch (aka french kiss/steamy kiss)' },
		{ name: 'special commands', value: 'to cheer someone up and tell them that you love them:\r\n"eboy, help me out here @<username>"\r\nto kick someone out of the server: uwu byebye @<username>\r\nto matchmake someone: uwu match @<username> @<username> BOTH MUST BE DIFFERENT USERS.' },
		)
		.setFooter(`Created by Maryam#9206`);
		msg.channel.send(embed);
 }
 
 });
 
 (async function registerCommands(dir = 'commands') {
	 let files = await fs.readdir(path.join(__dirname, dir));
	 for(let file of files) {
		 let stat = await fs.lstat(path.join(__dirname, dir, file));
		 if(stat.isDirectory())
			 registerCommands(path.join(dir, file));
		 else {
			 if(file.endsWith(".js")) {
				 let cmdName = file.substring(0, file.indexOf(".js"));
				 let cmdModule = require(path.join(__dirname, dir, file));
				 client.commands.set(cmdName, cmdModule);
			 }
		 }
	 }
 })();

client.login(process.env.token);