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
 
 if (msg.content.toLowerCase().includes('eboy, who built you?')) {
 msg.channel.send('hi ' + msg.author.toString() +' uwu! Maryam#9206 built me. If you have any questions, complaints or suggestions, you can DM her :heart:');
 }
    
 if (msg.content.toLowerCase().includes('eboy, how do i submit a suggestion or feedback?')) {
 msg.channel.send('hi ' + msg.author.toString() +', you can submit your suggestion or feedback here: https://forms.gle/GpoHX32kVQznvY3h6 though dont forget to leave down your name and a way to contact you, just in case there are questions we need to specify!');
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
 		 if (msg.author.id === "630803907181936641") {
			msg.author.send(`Dear Diary,\n\nI kinda wanna be Roman sometimes. Not that I dont wanna be him any other day, but I love how he's just so self-assured and he takes no crap from people, which I really envy. I would love to be like that. But actually I would love to be Roman Young. You know why? Cos he's one of the bestest people I have ever met. Actually okay no, he is the best person I have ever met. If I tell you all the reasons why I love Roman, it would take days because the list is really long and it grows every day. The thing is man always says he's a mess but he's my best friend and I love him for all his messes and stuffs. I mean kdjgha for someone who keeps saying that he's a mess, this dude grew up to be one of the kindest people ever. Like how does that work? Honestly though, how does that work?\n\nThe thing is that it's probably dumb but Roman is pretty much the person I would trust with my entire life. I always get so excited to talk to him and he always bullies me but like, in the way that could cheer me up in an instant. I don't think he realises it but these days, I have been breaking down more than usual but him being there, just being himself or even coming into my DMs with like "psssst tea!" always cheers me up instantly or whenever he calls me short, it would make me burst out laughing even when I'm crying and idk, that's the kind of best friend I want to be with for the rest of my life. And like what, he's in Masshoweveryouspellthat, maybe just maybe if someday he isn't uncomfortable, I would like to yeet there to say hi and steal all his doggos and food, and of course spend time with him. I have this plan that I'll bring my Switch and we could play Overcooked together and just scream at him to help me chop the tomatoes because I just really wanna spend time with my best friend.`)
			msg.author.send(`Sometimes I get terrified because what if I'm not really as much of a help to him as I am to him, but it means that I just have to try harder. There was once that I told Noa that Roman deserves the entire world and I'm not lying, because he does n.n And maybe, just maybe I can yeet there someday with chocolates and plushies and just smother him with love. I really can't wait for the day I get to meet my best friend :hearts: \n\na rambling mess, Maryam :heart:`)
		 }
		 else if (msg.author.id === "339046861409091586") {
			msg.author.send(`Dear Diary,\n\nI have this cool and amazing friend named Cedric, or Lawrence. He has like, tons of names holy heck and I feel like I should memorise all of them someday so that when I meet him, I'll just be like "hi Christabel, Cedric, Lawrence, Timo, etc" HAHAHA he'll be so annoyed XD I don't know if he realised it but I love him a whole lot and I know I don't say it much because I'm a dumdum, but I really do. He's one of those people I would like to be friends with like, forever. AND AND he's in Malaysia, so that's like within yeeting distance yknow? Heck I wish I could yeet to him one day and just smother him with love or something. The thing is, Cedric is one of the kindest, best person I know and I just sometimes wish that I could do more for him. Because sometimes he always helps people, everyone, he does so much for everyone and I just want to do a whole lot for him. He's so hardworking, holy heck I have never met anyone as hardworking as him, I sometimes want to be him, because wow, I envy. I wish I could tell him that I appreciate him a whole lot for everything he has done for me, whenever I get terrified or scared or when I have a terrible self-esteem, but I'm a dumdum and am shy so here I am saying it in this diary and I just want him to know that I never regretted meeting him. Heck, Cedric is pretty much one of those I would really really like to have in my life for the next hundred years and more, and I just- he means a whole lot to me, and I love him a whole lot.\n\na rambling mess, Maryam :heart:`);
		 }
		 else if (msg.author.id === "619781173245116426") {
			msg.author.send(`Dear Diary,\n\nHave you met Isla Brisbane? Cos you really gotta. She's like this amazing person who stepped into my life since what, 9 months ago? And she's been one of the best people in my life ever since. She's always taking care of me, which is- idk, it sometimes makes me cry because it's nice to have someone there to actually tell you to remember to eat and not trip, and just yeah. It makes me feel like someone actually cares about me, which is dumb because I know that a whole lot of people do care about me but when I first stepped into WoP, I was feeling exhausted with everything IRL and having Isla in my life has made that drastically better. I do know that sometimes it might  be difficult to deal with me, heck sometimes I get tired of being with me, but Isla doesn't seem like she's close to giving up on me, which is- idk I just really love her a whole lot. She's like family to me, and I just wish I could be with her pretty much forever? You know, she made me a better person in terms of clearing my messes up and just being okay. I think the one thing I never wanted to ever do is disappoint her, because she's one of the most important people in my life. Being best friends with Isla makes me feel like I could do anything you know? I mean, heck, she's so smart and her time management, holy crap. I can't even fanthom how she ever does all that but I'm always so proud whenever I see her around WoX and I'm just there like YAS that's my best friend. And like, I'm really really happy that she's in my life. I love her a whole lot and like someday, I would like her to go to my graduation because trust me, if I survive university, it would be because Isla is by my side.\n\na rambling mess, Maryam :heart:`);
		 }
		 else if (msg.author.id === "404475339327143936") {
			msg.author.send(`Dear Diary,\n\nYa know, for the past few weeks, I have been wanting to tell Alexia that I really love her and that I appreciate her in my life so much but I'm a shy little shit and feelings are illegal, but I do, really. She means a whole lot to me and I love that she's always so chaotic with me. And and yo, you should hear her voice. I am pretty much in love with her voice or something because like, heck, it definitely sounds like her XD The thing is, things have been really hard for the past few weeks and having Alexia there just being herself and yeeting me to different crazy topics, have been a good distraction and god, I really wish I could meet her and tell her that she means a whole lot to me. She never did realise what an amazing person she is, you know, which is... sad. Because she deserves everything, she deserves more than just her shitty dad and every single thing in the world. I wish sometimes I could just punch all the people that hurt her because she doesn't deserve that. If it could happen, I really want Alexia to stay in my life forever because you know sometimes you meet people and you're like "yeah I want this person here no matter what"? Yeah, that's Alexia for me :3\n\na rambling mess, Maryam :heart:`)
		 }
		 else if (msg.author.id === "632493999818670091") {
			 msg.author.send(`Dear Diary,\n\nEvery single day, River will be tonking me smh D: But I don't know, I'm okay with that because if River is tonking me, it means that he's still here, you know? And I really want River to always be here. He's pretty amazing, you know, even though sometimes he thinks he's not worth it but I pretty much think that he is. River is another one of those who makes me happy whenever I'm talking to them and I honestly could talk to River forever, even if it just means yeeting him gifs of smacking or tonking or running him over. I would like to think that somewhere along the way, we bonded or something but truthfully, River is one of my best friends, like he's pretty much top five people I love a whole lot and like one day, if I ever get to go on that road trip to meet everyone, I'm definitely dropping by to yoink him or even just smother him with love. You see, River is one of the greatest people ever but he doesn't believe it, so I'm going to stay by his side forever so that he believes it one day. n.n\n\na rambling mess, Maryam :heart:`)
		 }
		 else if (msg.author.id === "313845179239104524") {
			 msg.author.send(`Dear Diary,\n\nDid I ever tell you about this guy that Maryam in WoP had a crush on and decided to yeet to his owls only to become best friends with him? Yeah, that's Joel. Or rather Natasha. Either way, they have been one of the best people in my life. You know, they're always there and like, in my mind, I've pretty much adopted them as my elder sibling because that's what they are to me, honestly. I don't think I've ever told anyone this but meeting Natasha makes me a better person in the sense that I want to be like them. They always seem so friendly with everyone and confident, and I would like to be that. And and they're not afraid to go against the social norms, which I always have a problem doing so and holy heck, yeah I do want to grow up to be them someday. I just don't think I say it enough and I really should but I love Natasha a whole lot and they're always there. And I hope that I never take that for granted because to be honest, I would like them to stay in my life forever. And that road trip, I'll drop by someday if I could to give them a huge hug because they deserve it and more.\n\na rambling mess, Maryam :heart:`)
		 }
		 else if (msg.author.id === "689628816183656626") {
			 msg.author.send(`Dear Diary,\n\nDid you know, recently I got close to this cute person named Addy? Well, her name IG is like Adelaide but Addy yes n.n The funny thing is when she first joined WoP, I was there yknow? And I remember thinking, heck this is a cool girl, there's no way she would ever be friends with me. But then she started talking to me and I was like o.o The heck XD In a good way, of course. But I remember wanting to be best friends with her but I'm pretty much a dumb ass okay, I'm not good at talking to people so I just- kept quiet. But recently we started being close and sometimes I dont know, I just get really happy cos I can't believe that she's one of my closest friends and and it's really really funny because she doesn't think she's amazing but you know, Addy is pretty much one of those people I look up to. She has so many compassion inside of her that I just- heck, she's always apologising and I wish I could tell her nonstop that she's doing a great job, at everything. She doesn't have to take on the responsibility for everyone's mistakes, because she's doing amazing. She's just this bundle of- wow like if there was the best person award in the world, it would probably go to her. Addy is just one of those people I want to have in my life forever and meeting her has made me significantly happier and I know it sounds hella cheesy but I love her a whole lot and and sometimes I get happy being with her in VC because I could talk to her forever and yes, I am actually really lowkey happy that she's my close friend, best friend? Because if possible, I would like her to stay in my life forever. She's just precious as heck and she's so great at whatever she's doing, I'm wow. I can't believe I'm actually close to her, if I'm being honest. And I'm not lying, it's all the truth. I just, could she be my friend forever?/n/na rambling mess, Maryam :heart:`)
		 }
		 else if (msg.author.id === "308529372707684352") {
			 msg.author.send(`Dear Diary,\n\nWhen I first went into WoP, there was this cool person I met named Jordana. She was my HoH and if I'm being honest, she terrifies me a hell lot. Like bruh I'm- I'm actually still terrified. Not because she's scary but because she's so amazing and like, how would someone like that ever be friends with me? I remember being lowkey jealous of Roman because Roman talks to her a whole lot and I'm just here being a dumb potato because I get so shy to talk to her, but I also remember when I had problems, she would help me through them in like, the nicest way and honestly, if you have a Jordana in your life, you're pretty much the luckiest person ever. ALSO HER VOICE HECK I could listen to it forever omg T^T I just- Jordie is probably one of the best people in the world and I'm lucky to ever get to even say hi to her./n/na rambling mess, Maryam :heart:`)
		 }
         else if (msg.author.id === "305906783380176897") {
			 msg.author.send(`Dear Diary,/n/nYou have got to meet this cool as heck person someday named Ivy Baskerville. She's so freaking sweet and adorable and to be honest, I'm really really glad that she's in my life. She's always so pure and even though she's not really there sometimes, whenever she's there, she always has my back and everyone's, no matter what. The thing I love about Ivy a whole lot is that she never judges me for any of my messes, which is like heck, a whole lot and sometimes I wish I could tell her that she means a lot to me, but I'm a shy dumdum who isn't really good at stating my feelings, so I guess I'll just yeet it in a diary or something. I mean, heck, she always has like these cute drawings that are lowkey threatening and it's so adorable and whenever she comes in with her games stuffs, she always cheers me up, so it doesn't matter if I'm having a terrible day or crying, anything she does will cheer me right up and make me laugh. And honestly, I just want her to stay in my life forever. I know it probably sounds selfish as heck, but I love her a whole lot, I really really do. And I just- she's pretty damn amazing and I hope one day she realises that too./n/na rambling mess, Maryam :heart:`)
		 }
         else if (msg.author.id === "332123726864973837") {
		     msg.author.send(`Dear Diary,\n\nI want to marry Noa. That's it. That's the entire damn entry. But okay with all seriousness, I really love him with my entire heart. And sometimes I don't know how to tell him that, like how do I tell Noa that I am madly, crazily in love with him and that I want him in my life forever and I want to get married to him and wake up next to him and possibly learn how to cook for him even though it might potentially kill him. And I also want to go on many many dates with him, even if it means to just be next to him and watch Netflix, stealing kisses once in awhile. I think what Noa doesn't realise is that I love him so much that I don't care about anything else. He could probably tell me that he murdered someone and I would still be like, cool, wanna marry? I just, every day whenever I wake up, I want to be next to him and the feeling is so intense sometimes I just sit there and cry because holy hell, I really love him a whole lot. And I just want him to be here forever, and every day I get terrified that he would leave but I know he wont, but I still get terrified T^T And I just- I hope it doesn't scare him when I say I want to marry him because I really do. He's the love of my life and honestly, I dont want to live without him >.< I just. I really hope I get a chance to be with him, to kiss him, to snuggle him, heck to have sex with him and lick him all over, both of him with a dick and without a dick, because why not :yum: I just am madly, hopelessly, forever in love with him and I'm completely okay with that. :heart:`)
		 }
         else {
             msg.channel.send('it appears that you cannot read the diary because this is a special command that you have to unlock by Maryam being pretty much best friends with you. but uwu, she still loves you though :hearts:');
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
		{ name: 'information about eboy (type in the following)', value: 'eboy, how do I submit a suggestion or feedback?\r\neboy, who built you?' },
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