const Discord = require('discord.js');
const datacount = require('./datacount.json');
const ud = require('urban-dictionary');
const client = new Discord.Client();
const prefix = "uwu ";
const fs = require('fs');

let eboys = [];


client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {

 if (msg.content.toLowerCase() === 'òwó') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('buzz buzz');
	 }
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
 
var message = msg.content.toLowerCase()

 if (message.includes('hi eboy uwu')) {
 msg.channel.send('hi ' + msg.author.toString() +' uwu!');
 }
 
 if (message.includes('goodmorning') || message.includes('good morning')) {
		 if (msg.author.bot) return;
		 else {
			msg.channel.send(`Goodmorning uwu! Have a great day!`);
		 }
 }
 
 if (message.includes('goodnight') || message.includes('good night') || message.includes('goodnights') || message.includes('nighty')) {
		 if (msg.author.bot) return;
		 else {
			msg.channel.send(`Goodnight uwu! Sleep well!`);
		 }
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
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('defenestrate' in eboys[i]) {
                      for (var j in eboys[i].defenestrate) {
                      	if (tagged in eboys[i].defenestrate[j]) {
                      		eboys[i].defenestrate[j][tagged] = eboys[i].defenestrate[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].defenestrate[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].defenestrate = [];
                	eboys[i].defenestrate.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'defenestrate': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].defenestrate) {
            	var defenestrate = eboys[i].defenestrate[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} defenestrated themselves ${defenestrate} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('defenestrate' in eboys[i]) {
                      for (var j in eboys[i].defenestrate) {
                      	if (tagged in eboys[i].defenestrate[j]) {
                      		eboys[i].defenestrate[j][tagged] = eboys[i].defenestrate[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].defenestrate[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].defenestrate = [];
                	eboys[i].defenestrate.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'defenestrate': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].defenestrate) {
            	var defenestrate = eboys[i].defenestrate[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} defenestrated ${taggedUser.displayName} ${defenestrate} times.)`);
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
			'https://media.tenor.com/images/0b0a9ed3d2a8ffefda817a4c96862f95/tenor.gif',
			'https://historiasdeumotaku.files.wordpress.com/2015/06/tumblr_ndkbzr5tma1shcw33o5_500.gif'
			]
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('yeet' in eboys[i]) {
                      for (var j in eboys[i].yeet) {
                      	if (tagged in eboys[i].yeet[j]) {
                      		eboys[i].yeet[j][tagged] = eboys[i].yeet[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].yeet[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].yeet = [];
                	eboys[i].yeet.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'yeet': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].yeet) {
            	var yeet = eboys[i].yeet[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You yeeted yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} yeeted themselves ${yeet} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('yeet' in eboys[i]) {
                      for (var j in eboys[i].yeet) {
                      	if (tagged in eboys[i].yeet[j]) {
                      		eboys[i].yeet[j][tagged] = eboys[i].yeet[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].yeet[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].yeet = [];
                	eboys[i].yeet.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'yeet': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].yeet) {
            	var yeet = eboys[i].yeet[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You yeeted **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} yeeted ${taggedUser.displayName} ${yeet} times.)`);
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
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('slap' in eboys[i]) {
                      for (var j in eboys[i].slap) {
                      	if (tagged in eboys[i].slap[j]) {
                      		eboys[i].slap[j][tagged] = eboys[i].slap[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].slap[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].slap = [];
                	eboys[i].slap.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'slap': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].slap) {
            	var slap = eboys[i].slap[j][tagged];	
            }
          }
        }
			
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You slapped yourself!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Oof, do I see a handprint mark on your face, ${taggedUser.username}?\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} slapped themselves ${slap} times.)`);
		msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('slap' in eboys[i]) {
                      for (var j in eboys[i].slap) {
                      	if (tagged in eboys[i].slap[j]) {
                      		eboys[i].slap[j][tagged] = eboys[i].slap[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].slap[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].slap = [];
                	eboys[i].slap.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'slap': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].slap) {
            	var slap = eboys[i].slap[j][tagged];	
            }
          }
        }

		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You slapped **${taggedUser.displayName}**!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Oof, do I see a handprint mark on your face, ${taggedUser.displayName}?\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} slapped ${taggedUser.displayName} ${slap} times.)`);
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
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('fuck' in eboys[i]) {
                      for (var j in eboys[i].fuck) {
                      	if (tagged in eboys[i].fuck[j]) {
                      		eboys[i].fuck[j][tagged] = eboys[i].fuck[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].fuck[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].fuck = [];
                	eboys[i].fuck.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'fuck': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].fuck) {
            	var fuck = eboys[i].fuck[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`So you're gonna do yourself? That's cool.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Maybe you need some cold shower yeah?\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} fucked themselves ${fuck} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('fuck' in eboys[i]) {
                      for (var j in eboys[i].fuck) {
                      	if (tagged in eboys[i].fuck[j]) {
                      		eboys[i].fuck[j][tagged] = eboys[i].fuck[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].fuck[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].fuck = [];
                	eboys[i].fuck.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'fuck': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].fuck) {
            	var fuck = eboys[i].fuck[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You- Well.... You want to do **${taggedUser.displayName}**?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Get a room, both of you smh!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} fucked ${taggedUser.displayName} ${fuck} times.)`);
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
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('kiss' in eboys[i]) {
                      for (var j in eboys[i].kiss) {
                      	if (tagged in eboys[i].kiss[j]) {
                      		eboys[i].kiss[j][tagged] = eboys[i].kiss[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].kiss[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].kiss = [];
                	eboys[i].kiss.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'kiss': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].kiss) {
            	var kiss = eboys[i].kiss[j][tagged];	
            }
          }
        }
			
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You kissed yourself! AwA, so cute!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Such cuteness uwu!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} kissed themselves ${kiss} times.)`);
		msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('kiss' in eboys[i]) {
                      for (var j in eboys[i].kiss) {
                      	if (tagged in eboys[i].kiss[j]) {
                      		eboys[i].kiss[j][tagged] = eboys[i].kiss[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].kiss[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].kiss = [];
                	eboys[i].kiss.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'kiss': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].kiss) {
            	var kiss = eboys[i].kiss[j][tagged];	
            }
          }
        }
			
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`You kissed **${taggedUser.displayName}**! AwA, so cute!`)
		.setImage(gifs[Math.floor(Math.random()*gifs.length)])
		.setFooter(`Such cuteness uwu!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} kissed ${taggedUser.displayName} ${kiss} times.)`);
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
			'https://media.tenor.com/images/64bd964e32d1c943801743aaf0565f25/tenor.gif',
			'https://media1.tenor.com/images/1f8c90e5efbd0bbdf0d385ef4f85c9e9/tenor.gif',
			'https://i.pinimg.com/originals/d4/37/1c/d4371ceac00951149b514e172e9dd64c.gif'
			]
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('kick' in eboys[i]) {
                      for (var j in eboys[i].kick) {
                      	if (tagged in eboys[i].kick[j]) {
                      		eboys[i].kick[j][tagged] = eboys[i].kick[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].kick[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].kick = [];
                	eboys[i].kick.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'kick': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].kick) {
            	var kick = eboys[i].kick[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked yourself! How even?!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} kicked themselves ${kick} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('kick' in eboys[i]) {
                      for (var j in eboys[i].kick) {
                      	if (tagged in eboys[i].kick[j]) {
                      		eboys[i].kick[j][tagged] = eboys[i].kick[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].kick[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].kick = [];
                	eboys[i].kick.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'kick': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].kick) {
            	var kick = eboys[i].kick[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You kicked **${taggedUser.displayName}**! Ouch!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} kicked ${taggedUser.displayName} ${kick} times.)`);
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
			'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
			'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
			'https://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-27.gif',
			'https://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-7.gif',
			'https://24.media.tumblr.com/3bd5d901c51689fae2a6b95531ed6bef/tumblr_mwqg8a1CQz1rwzq4jo1_500.gif',
			'https://thumbs.gfycat.com/GeneralSlimAntarcticfurseal-size_restricted.gif',
			'https://pa1.narvii.com/6275/8588579649e49bac663309fed7a792daacd2b82b_hq.gif',
			'https://cdn.lowgif.com/medium/d26c65f2d66be540-merriberri-graphic-arts-services-requests.gif',
			'https://media.tenor.com/images/839e9bd5061468374983868ea8369671/tenor.gif',
			'https://i.gifer.com/GaYY.gif',
			'https://66.media.tumblr.com/85d8161c57f92c9b50590d7605b34e4e/tumblr_inline_pq885e8o7T1v8hwtj_540.gif',
			'https://gifdownload.net/wp-content/uploads/2019/01/anime-girl-tackle-hug-gif-4.gif',
			'https://media1.giphy.com/media/117o9BJASzmLNC/giphy.gif',
			'https://i.gifer.com/RhzY.gif',
			'https://i.pinimg.com/originals/c2/2f/b9/c22fb9595eda0368856778a9a97483a8.gif',
			'https://gifimage.net/wp-content/uploads/2017/11/flying-tackle-hug-gif-7.gif',
			'https://images-ext-1.discordapp.net/external/wik3p3tqmh0YzWWYf8bOFVcRxehmF9K3OMwQeOxbIlY/https/media.discordyui.net/reactions/hug/fP0FnXi.gif',
			'https://i.pinimg.com/originals/a8/f0/4d/a8f04d7bc4d67745a670e079130dfb54.gif',
			'https://media.tenor.com/images/f1dc8d4a16e2de3b22ff3aa25fd62e8a/tenor.gif'
			]
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('hug' in eboys[i]) {
                      for (var j in eboys[i].hug) {
                      	if (tagged in eboys[i].hug[j]) {
                      		eboys[i].hug[j][tagged] = eboys[i].hug[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].hug[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].hug = [];
                	eboys[i].hug.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'hug': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].hug) {
            	var hug = eboys[i].hug[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You hugged yourself. Self-love uwu!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Everyone needs a hug once in awhile....\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} hugged themselves ${hug} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('hug' in eboys[i]) {
                      for (var j in eboys[i].hug) {
                      	if (tagged in eboys[i].hug[j]) {
                      		eboys[i].hug[j][tagged] = eboys[i].hug[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].hug[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].hug = [];
                	eboys[i].hug.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'hug': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].hug) {
            	var hug = eboys[i].hug[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You hugged **${taggedUser.displayName}**.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Everyone needs a hug once in awhile....\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} hugged ${taggedUser.displayName} ${hug} times.)`);
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
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('tonk' in eboys[i]) {
                      for (var j in eboys[i].tonk) {
                      	if (tagged in eboys[i].tonk[j]) {
                      		eboys[i].tonk[j][tagged] = eboys[i].tonk[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].tonk[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].tonk = [];
                	eboys[i].tonk.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'tonk': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].tonk) {
            	var tonk = eboys[i].tonk[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked yourself! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} tonked themselves ${tonk} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('tonk' in eboys[i]) {
                      for (var j in eboys[i].tonk) {
                      	if (tagged in eboys[i].tonk[j]) {
                      		eboys[i].tonk[j][tagged] = eboys[i].tonk[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].tonk[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].tonk = [];
                	eboys[i].tonk.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'tonk': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].tonk) {
            	var tonk = eboys[i].tonk[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You tonked **${taggedUser.displayName}**! KO!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Are you okay, ${taggedUser.displayName}?\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} tonked ${taggedUser.displayName} ${tonk} times.)`);
			msg.channel.send(embed);

		}
	}
 }
 
 if (command === 'patpat') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
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
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('patpat' in eboys[i]) {
                      for (var j in eboys[i].patpat) {
                      	if (tagged in eboys[i].patpat[j]) {
                      		eboys[i].patpat[j][tagged] = eboys[i].patpat[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].patpat[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].patpat = [];
                	eboys[i].patpat.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'patpat': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].patpat) {
            	var patpat = eboys[i].patpat[j][tagged];	
            }
          }
        }
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You patpats yourself! Okay?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is patted uwu.\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} patted themselves ${patpat} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('patpat' in eboys[i]) {
                      for (var j in eboys[i].patpat) {
                      	if (tagged in eboys[i].patpat[j]) {
                      		eboys[i].patpat[j][tagged] = eboys[i].patpat[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].patpat[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].patpat = [];
                	eboys[i].patpat.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'patpat': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].patpat) {
            	var patpat = eboys[i].patpat[j][tagged];	
            }
          }
        }

			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You patpats smol **${taggedUser.displayName}** UwU`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is patted uwu.\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} patted ${taggedUser.displayName} ${patpat} times.)`);
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
			'https://media1.tenor.com/images/288b7338acc44e10004a1063dc5fc521/tenor.gif'
			]
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('punch' in eboys[i]) {
                      for (var j in eboys[i].punch) {
                      	if (tagged in eboys[i].punch[j]) {
                      		eboys[i].punch[j][tagged] = eboys[i].punch[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].punch[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].punch = [];
                	eboys[i].punch.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'punch': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].punch) {
            	var punch = eboys[i].punch[j][tagged];	
            }
          }
        }

			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You punched yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} punched themselves ${punch} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('punch' in eboys[i]) {
                      for (var j in eboys[i].punch) {
                      	if (tagged in eboys[i].punch[j]) {
                      		eboys[i].punch[j][tagged] = eboys[i].punch[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].punch[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].punch = [];
                	eboys[i].punch.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'punch': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].punch) {
            	var punch = eboys[i].punch[j][tagged];	
            }
          }
        }

			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You punched **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} punched ${taggedUser.displayName} ${punch} times.)`);
			msg.channel.send(embed);

		}
	}
 }
 
 if (command === 'boop') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = [
			'https://media2.giphy.com/media/oeYpYm0BOEDWo/giphy.gif',
			'https://imgur.com/QDkTaFe.gif',
			'https://media.giphy.com/media/12BGUcW8xxpPRS/giphy.gif',
			'https://media.giphy.com/media/Mf4NqZAknusBq/giphy.gif'
			]
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('boop' in eboys[i]) {
                      for (var j in eboys[i].boop) {
                      	if (tagged in eboys[i].boop[j]) {
                      		eboys[i].boop[j][tagged] = eboys[i].boop[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].boop[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].boop = [];
                	eboys[i].boop.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'boop': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].boop) {
            	var boop = eboys[i].boop[j][tagged];	
            }
          }
        }

			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You booped yourself! AwA cute.`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Boop bap.\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} booped themselves ${boop} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('boop' in eboys[i]) {
                      for (var j in eboys[i].boop) {
                      	if (tagged in eboys[i].boop[j]) {
                      		eboys[i].boop[j][tagged] = eboys[i].boop[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].boop[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].boop = [];
                	eboys[i].boop.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'boop': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].boop) {
            	var boop = eboys[i].boop[j][tagged];	
            }
          }
        }


			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You booped **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Boop bap.\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} booped ${taggedUser.displayName} ${boop} times.)`);
			msg.channel.send(embed);

		}
	}
 }
 
 if (command === 'kill') {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
        var author = msg.author.id;
        var tagged = msg.author.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('kill' in eboys[i]) {
                      for (var j in eboys[i].kill) {
                      	if (tagged in eboys[i].kill[j]) {
                      		eboys[i].kill[j][tagged] = eboys[i].kill[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].kill[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].kill = [];
                	eboys[i].kill.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'kill': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].kill) {
            	var kill = eboys[i].kill[j][tagged];	
            }
          }
        }

		
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated yourself!`)
			.setImage('https://i.pinimg.com/originals/06/de/3a/06de3a0af78355bf7d4774cda4e4180e.gif')
			.setFooter(`${taggedUser.displayName} is dead! I'll revive them soon uwu.\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} killed themselves ${kill} times.)`);
			msg.channel.send(embed);
		}
		else {
			
        var author = msg.author.id;
        var tagged = taggedUser.id;
        
        if(eboys.some(eboy => eboy.id === author)){
            for (var i in eboys) {
              if (eboys[i].id === author) {
                if ('kill' in eboys[i]) {
                      for (var j in eboys[i].kill) {
                      	if (tagged in eboys[i].kill[j]) {
                      		eboys[i].kill[j][tagged] = eboys[i].kill[j][tagged] + 1;
                     }
                     else {
                     	eboys[i].kill[j][tagged] = 1;
                     }
                     }
                }
                else {
                	eboys[i].kill = [];
                	eboys[i].kill.push({[tagged]: 1});
                }
              }
                     }
                     }
            else {
            	eboys.push({ id: author, 'kill': [{[tagged]: 1}] });
            }
            
        for (var i in eboys) {
          if (eboys[i].id === author) {
            for (var j in eboys[i].kill) {
            	var kill = eboys[i].kill[j][tagged];	
            }
          }
        }

                          
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You assassinated **${taggedUser.displayName}**!`)
			.setImage('https://i.pinimg.com/originals/06/de/3a/06de3a0af78355bf7d4774cda4e4180e.gif')
			.setFooter(`${taggedUser.displayName} is dead! I'll revive them soon uwu.\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} killed ${taggedUser.displayName} ${kill} times.)`);
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
					msg.channel.send("Access Denied");
				});
	}
 } 
 
//-----------------------------------------------------------------------------------------------------------------------------------------
 
 if (command === 'celly') {
	if(eboys.some(eboy => eboy.id === msg.author.id)){
		for (var i in eboys) {
		  if (eboys[i].id === msg.author.id) {
			if ('celly' in eboys[i]) {
				eboys[i].celly = eboys[i].celly + 1;
			}
			else {
				eboys[i].celly = 1;
			}
		  }
		}
	}
	else {
		eboys.push({ id: msg.author.id, celly: 1 });
	}
        for (var i in eboys) {
          if (eboys[i].id === msg.author.id) {
            var celly = eboys[i].celly;
          }
        }
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
		.setFooter(`I don't know why you're happy but I'm glad you're happy :3\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} celly-ed ${celly} times.)`);
		msg.channel.send(embed);
 }

 if (command === 'cry') {
	if(eboys.some(eboy => eboy.id === msg.author.id)){
		for (var i in eboys) {
		  if (eboys[i].id === msg.author.id) {
			if ('cry' in eboys[i]) {
				eboys[i].cry = eboys[i].cry + 1;
			}
			else {
				eboys[i].cry = 1;
			}
		  }
		}
	}
	else {
		eboys.push({ id: msg.author.id, cry: 1 });
	}
        for (var i in eboys) {
          if (eboys[i].id === msg.author.id) {
            var cry = eboys[i].cry;
          }
        }
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
		.setFooter(`Don't cry :(\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} cried ${cry} times.)`);
		msg.channel.send(embed);
 }
 
 if (command === 'angry') {
	if(eboys.some(eboy => eboy.id === msg.author.id)){
		for (var i in eboys) {
		  if (eboys[i].id === msg.author.id) {
			if ('angry' in eboys[i]) {
				eboys[i].angry = eboys[i].angry + 1;
			}
			else {
				eboys[i].angry = 1;
			}
		  }
		}
	}
	else {
		eboys.push({ id: msg.author.id, angry: 1 });
	}
        for (var i in eboys) {
          if (eboys[i].id === msg.author.id) {
            var angry = eboys[i].angry;
          }
        }
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
		.setFooter(`Everyone, back away!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} got angry ${angry} times.)`);
		msg.channel.send(embed);
 }
 
 if (command === 'dance') {
	if(eboys.some(eboy => eboy.id === msg.author.id)){
		for (var i in eboys) {
		  if (eboys[i].id === msg.author.id) {
			if ('dance' in eboys[i]) {
				eboys[i].dance = eboys[i].dance + 1;
			}
			else {
				eboys[i].dance = 1;
			}
		  }
		}
	}
	else {
		eboys.push({ id: msg.author.id, dance: 1 });
	}
        for (var i in eboys) {
          if (eboys[i].id === msg.author.id) {
            var dance = eboys[i].dance;
          }
        }
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
		.setFooter(`Let's dance together uwu!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} danced ${dance} times.)`);
		msg.channel.send(embed);
 }
 
 if (command === 'tantrum') {
	if(eboys.some(eboy => eboy.id === msg.author.id)){
		for (var i in eboys) {
		  if (eboys[i].id === msg.author.id) {
			if ('tantrum' in eboys[i]) {
				eboys[i].tantrum = eboys[i].tantrum + 1;
			}
			else {
				eboys[i].tantrum = 1;
			}
		  }
		}
	}
	else {
		eboys.push({ id: msg.author.id, tantrum: 1 });
	}
	
	fs.writeFile('./datacount.json', JSON.stringify(eboys, null, 2) , function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	
        for (var i in eboys) {
          if (eboys[i].id === msg.author.id) {
            var tantrum = eboys[i].tantrum;
        }
		}
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
		.setFooter(`Everyone stay away from ${msg.guild.members.cache.get(msg.author.id).displayName}!\r\n(${msg.guild.members.cache.get(msg.author.id).displayName} threw tantrums ${tantrum} times.)`);
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
		{ name: 'main commands', value: 'uwu\r\nowo\r\nawa\r\nòwó\r\nhi eboy uwu\r\nuwu uwu <words to uwuify>\r\nuwu search <word to search>' },
		{ name: 'uwu <commands> @<username>', value: 'boop\r\ndefenestrate\r\nfuck\r\nhug\r\nkick\r\nkill\r\nkiss\r\npatpat\r\npunch\r\nslap\r\ntonk\r\nyeet' },
		{ name: 'uwu <commands>', value: 'angry\r\ncry\r\ncelly\r\ndance\r\npatpat\r\ntantrum' },
		)
		.setFooter(`Created by Maryam#9206`);
		msg.channel.send(embed);
 }
 
 });

client.login(process.env.token);