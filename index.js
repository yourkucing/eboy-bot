const Discord = require('discord.js');
const ud = require('urban-dictionary');
const client = new Discord.Client({disableEveryone: false, partials: ['MESSAGE', 'REACTION']});
const prefix = "uwu ";
const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');
const timeoutModel = require('./models/timeoutSchema');
const channelModel = require('./models/channelSchema');
const moneyModel = require('./models/moneySchema');
const sprintModel = require('./models/sprintSchema');
const birthdayModel = require('./models/birthdaySchema');
const reactionsModel = require('./models/reactionsSchema');


client.commands = new Map();

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log('Connected to the database!');
}).catch((err) => {
	eboylog = client.channels.cache.get('867744429657292810')
	eboylog.send(`<@279101053750870017>: Unable to connect to database.\n${err}`)
});


const checkforTimeouts = async() => {
	const query = {
		timeout: {
			$lte: Date.now()
		}
	}
	const results = await timeoutModel.find(query)
	if (results) {
		for (const post of results) {

			userID = post.userID
			guildID = post.serverID
			channelID = post.channelID
			eboylog = client.channels.cache.get('867744429657292810')
			eboylog.send(`User ID: ${userID}'s timeout is supposed to end.`)
			const guild = client.guilds.cache.get(guildID)
			const channel = client.channels.cache.get(channelID)
			const timeoutrole = guild.roles.cache.find(role => role.name === "Time Out Corner")
			const user = guild.members.cache.get(userID)
			if (!user) {
				continue
			}
			else {
				user.roles.remove(timeoutrole.id)
				channel.send(`<@${userID}>, your timeout has ended!`)
				eboylog = client.channels.cache.get('867744429657292810')
				eboylog.send(`Timeout has ended for User ID: ${userID}.`)
				
				await timeoutModel.deleteOne({userID: userID, serverID: guildID, channelID: channelID}).catch(e => {
					eboylog = client.channels.cache.get('867744429657292810')
					eboylog.send(`<@279101053750870017>: Unable to remove user from timeout database. [User ID: ${userID}]\n${e}`)
				})
			}
			
		}
	}

	setTimeout(checkforTimeouts, 1000 * 10)
}

const checkforBirthdays = async() => {
	day = new Date().getDate()
	month = new Date().getMonth() + 1
	if (new Date().getUTCHours() == 0 && new Date().getUTCMinutes() == 0) {
		birthday = new Date(`2000-${month}-${day}`)
		const query = {
			birthday: birthday
		}
	
		birthdayModel.find(query).then(results => {
			if (results) {
				for (const post of results) {
					userID = post.userID
					guildID = post.serverID
					channelID = post.channelID
					
					eboylog = client.channels.cache.get('867744429657292810')
					eboylog.send(`User ID: ${userID}'s birthday is supposed to be today.`)
					const guild = client.guilds.cache.get(guildID)
					const channel = client.channels.cache.get(channelID)
					const user = guild.members.cache.get(userID)
					if (!user) {
						continue
					}
					else {
						channel.send(`Happy birthday, <@${userID}>! I hope you have an amazing birthday uwu. :3`)
						eboylog = client.channels.cache.get('867744429657292810')
						eboylog.send(`Birthday message has been sent for user ID: ${userID}.`)
					}
				}
			}
		})
	}

	setTimeout(checkforBirthdays, 1000 * 60)
}

const checkforSprints = async() => {
	const query2 = {
		sprint: {
			$lte: Date.now()
		}
	}

	sprintModel.find(query2).then(results2 => {
		if (results2) {
			for (const post2 of results2) {
				userID2 = post2.userID
				guildID2 = post2.serverID
				channelID2 = post2.channelID
				wordcount = post2.word
	
				const guild2 = client.guilds.cache.get(guildID2)
				const channel2 = client.channels.cache.get(channelID2)
				const user2 = guild2.members.cache.get(userID2)
				if (!user2) {
					continue
				}
				else {
					channel2.send(`<@${userID2}>! Writing sprint is up!`);
					channel2.send(`What is your new word count?`);
					channel2.awaitMessages(m => m.author.id == userID2, {max: 1}).then(collected => {
						if (isNaN(parseInt(collected.first().content))) {
							channel2.send("That's not a number, bro. Count it ya self, goodbye XD")
						}
						else {
							newwordcount = parseInt(collected.first().content)
							channel2.send(`Nice. You wrote ${newwordcount - wordcount} words. Good job, mate!`)
							sprintModel.deleteOne({userID: userID2, serverID: guildID2, channelID: channelID2}).then(deleted => {
								eboylog = client.channels.cache.get('867744429657292810')
								eboylog.send(`Sprint ended for ${user2.username}. [User ID: ${userID2}]\n${e}`)
							}).catch(e => {
								eboylog = client.channels.cache.get('867744429657292810')
								eboylog.send(`<@279101053750870017>: Unable to remove user from sprint database. [User ID: ${userID2}]`)
							})
						}
					})
				}
			}
		}
	})

	setTimeout(checkforSprints, 1000 * 30)
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('uwu help', { type: 'STREAMING' });
	checkforTimeouts().catch((err) => {
		console.log(err)
	})
	checkforSprints().catch((err) => {
		console.log(err)
	})
	checkforBirthdays().catch((err) => {
		console.log(err)
	})
 });

 client.on('guildCreate', guild => {
	eboylog = client.channels.cache.get('867744429657292810')
	eboylog.send(`Eboy just joined a new server: **${guild.name}** [Total: ${client.guilds.cache.size} servers]`)

	guild.systemChannel.send(`Hello there! Thank you for using Eboy bot uwu!\n\nYou can start off by doing \`uwu help\` to see all the relevant commands. You can also enable interactions by eboy (mainly having him reply to your goodmorning or goodnight) by running the command \`uwu enable-interactions\`. Of course, only admins can do this!\n\nMaryam#9206 built me. If you have any questions, complaints or suggestions, you can DM her.\nYou can also submit your suggestion or feedback here: https://cookie-codes.tumblr.com/eboy/askme though dont forget to leave down your name and a way to contact you, just in case there are questions we need to specify! (∩•̀ω•́)⊃-⋆`)
	
	});	

client.on('guildDelete', guild => {
	eboylog = client.channels.cache.get('867744429657292810')
	eboylog.send(`Eboy just got kicked out of a server: **${guild.name}** [Total: ${client.guilds.cache.size} servers]`)

	guildID = guild.id
	timeoutModel.deleteMany({serverID: guildID}).then(r = {
		if (r) {
			birthdayModel.deleteMany({serverID: guildID}).then(s => {
				if (s) {
					sprintModel.deleteMany({serverID: guildID}).then(t => {
						reactionsModel.deleteMany({serverID: guildID}).then(u => {
							if(u) {
								eboylog.send(`Deleted everything from ${guild.name} [${guild.id}].`)
							}
						}).catch(e => eboylog.send(`<@279101053750870017>, unable to delete reactions from ${guild.name} [${guild.id}].`))
					}).catch(e => eboylog.send(`<@279101053750870017>, unable to delete sprints from ${guild.name} [${guild.id}].`))
				}
			}).catch(e => eboylog.send(`<@279101053750870017>, unable to delete birthdays from ${guild.name} [${guild.id}].`))

		}
	}).catch(e => eboylog.send(`<@279101053750870017>, unable to delete timeouts from ${guild.name} [${guild.id}].`))
});	

client.on('messageDelete', async (message) => {
	messageID = message.id
	reactionmsg = await reactionsModel.find({messageID: messageID})
	if (!reactionmsg || reactionmsg.length == 0) {
		//nothing
	}
	else {
		reactionsModel.deleteMany({messageID: messageID}).then(r => {
			if (r) {
				console.log(`deleted!`)
			}
		})
	}
});

client.on('messageReactionAdd', async (reaction, user) => {
	// When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}
	try {
		messageID = reaction.message.id
		channelID = reaction.message.channel.id
		serverID = reaction.message.guild.id
		emoji = reaction.emoji.id
		userID = user.id
		guild = client.guilds.cache.get(serverID)
		users = guild.members.cache.get(userID)
		
		if (!users.bot) {
			if (emoji == null) {
				emoji = reaction.emoji.name
			}
			reactionmsg = await reactionsModel.findOne({serverID: serverID, channelID: channelID, messageID: messageID, emoji: emoji})
	
			if (!reactionmsg) {
				//nothing happens
			}
			else {
				if (users.roles.cache.has(reactionmsg.role)) {
					//nothing happens
				}
				else {
					role = guild.roles.cache.get(reactionmsg.role)
					if (!role) {
						//nothing happens
					}
					users.roles.add(role)
				}
			}
		}

	} catch(err) {
		eboylog = client.channels.cache.get('867744429657292810')
		eboylog.send(`<@279101053750870017>: Error with waiting for reaction for reaction role.\n${err}`)
	}
});

client.on('messageReactionRemove', async (reaction, user) => {
	// When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}
	try {
		messageID = reaction.message.id
		channelID = reaction.message.channel.id
		serverID = reaction.message.guild.id
		emoji = reaction.emoji.id
		userID = user.id
		guild = client.guilds.cache.get(serverID)
		users = guild.members.cache.get(userID)
		if (emoji == null) {
			emoji = reaction.emoji.name
		}
		reactionmsg = await reactionsModel.findOne({serverID: serverID, channelID: channelID, messageID: messageID, emoji: emoji})

		if (!reactionmsg) {
			//nothing happens
		}
		else {
			if (users.roles.cache.has(reactionmsg.role)) {
				role = guild.roles.cache.get(reactionmsg.role)
				users.roles.remove(role)
			}
		}
	} catch(err) {
		console.log(err)
	}
});

client.on('message', msg => {

if (msg.author.bot) return

channelModel.findOne({channelID: msg.channel.id}).then(moneychannel => {
	if(moneychannel){

		moneyModel.findOneAndUpdate({userID: msg.author.id}, {
			$inc: {
				gold: 2
			}
		}).then(result => {
			if(!result) {
				console.log(result)
			}
		}).catch(e => {console.log(e)})
	}
})



var message = msg.content.toLowerCase()

if (message.includes('goodmorning') || message.includes(`good morning`)) {
	if (msg.author.bot) return;
	else {
		channelModel.findOne({channelID: msg.guild.id}).then(morning => {
			if(morning){
				msg.channel.send(`Goodmorning uwu! Have a great day!`);
			}
		})
		
	}
}

if (message.includes('goodnight') || message.includes(`good night`)) {
		if (msg.author.bot) return;
		else {
			channelModel.findOne({channelID: msg.guild.id}).then(morning => {
				if(morning){
					msg.channel.send(`Goodnight uwu! Sleep well!`);
				}
			})
		
		}
}
	

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

 if (message.includes('hi eboy')) {
 msg.channel.send('hi ' + msg.author.toString() +' uwu!');
 }
    
 if (message.includes('eboy, i love you') || message.includes('eboy i love you')) {
 msg.channel.send('I love you too, ' + msg.author.toString() +' uwu! :heart:');
 }
 
 if (message.includes('can i get a yee claw')) {
 msg.channel.send('yee claw!');
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
	if (msg.channel.type === 'dm' && !msg.author.bot ) return msg.reply('None of these commands can be run in DMs. Please run them in a server where I am in.');
	const words = args.join(' ');
	msg.channel.send(words.replace(/r/g,'w').replace(/s/g,'sh').replace(/l/g,'w').replace(/R/g,'W').replace(/S/g,'Sh').replace(/L/g,'W') + ' uwu');
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

 if(client.commands.get(command)) {
	 client.commands.get(command).run(client, msg, args).catch((e) => { console.log(e); });
 }

//-----------------------------------------------------------------------------------------------------------------------------------------
 
if (command === 'search') {
	if (msg.channel.type === 'dm' && !msg.author.bot ) return msg.reply('None of these commands can be run in DMs. Please run them in a server where I am in.');
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
	if (msg.channel.type === 'dm' && !msg.author.bot ) return msg.reply('None of these commands can be run in DMs. Please run them in a server where I am in.');
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`Commands`)
		.setDescription('Thank you for using Eboy bot uwu!\nMaryam#9206 built me. If you have any questions, complaints or suggestions, you can DM her.\nYou can submit your suggestion or feedback here: https://cookie-codes.tumblr.com/eboy/askme though dont forget to leave down your name and a way to contact you, just in case there are questions we need to specify! (∩•̀ω•́)⊃-⋆\n\nEboy\'s full guide: https://cookie-codes.tumblr.com/eboy')
		.addFields(
		{ name: 'main commands', value: '`uwu`, `owo`, `awa`, `òwó`, `hi eboy uwu`, `eboy, i love you`, `can i get a yee claw`' },
		{ name: 'uwu <commands> @<username>', value: '`bite`, `boop`, `cling`, `console`, `defenestrate`, `delete`, `drag`, `hug`, `kick`, `kill`, `kiss`, `love`, `patpat`, `peck` (aka peck on the cheeks), `poke`, `punch`, `scold`, `shake`, `shoot`, `slap`, `snuggle`, `stab`, `summon`, `tackle`, `tonk`, `untonk`, `yeet`' },
		{ name: 'uwu <commands>', value: '`angry`, `cheer`, `clap`, `confused`, `cry`, `dance`, `die`, `eat`, `hide`, `hydrate`, `jitter`, `laugh`, `party`, `peek`, `run`, `scream`, `sleep`, `spazz`, `tantrum`, `work`, `yoink`' },
		{ name: 'uwu <commands> @<username> ONLY ALLOWED IN NSFW CHANNELS (also there are gay stuffs, so if youre not comfortable with it, dont use it.)', value: '`choke`, `fuck`, `smooch` (aka french kiss/steamy kiss)' },
		{ name: 'money commands', value: 'To enable or disable money in channels (gain 2 g with every message that is sent, NOTE: Only admins can use this): `uwu enable-money`, `uwu disable-money`\r\nTo give people money: `uwu paypal <@username> <amount: eg "2g">`\r\nTo rob people: `uwu rob`\r\nTo view your wallet: `uwu wallet`\r\nTo view the pet store: `uwu petstore`\r\nTo view your pets: `uwu pets`\r\nTo rename pets: `uwu pets rename`\r\nTo feed pets: `uwu pets feed`\r\nTo gift petfood: `uwu gift <@user>`'},
		{ name: 'decision/useful commands', value: 'To ask the 8ball a question: `uwu 8ball <your question>`\r\nTo choose an option: `uwu choose [option1, option2, option3, ...]` Dont forget to use the [].\r\nTo roll dice: eg. `uwu dice 2d6` (2d6 = 2 d6 dice)\r\nTo sort your choices: `uwu random [option1, option2, ...]`\r\nTo use the calculator (addition, subtraction, multiplication, division): `uwu math <add/subtract/divide/multiply> [number1, number2, number3, ...]`\r\nTo do a writing sprint (with auto calculated word count): `uwu sprint <time [eg: "2" for 2 minutes] Note that it can only be done for minutes>`'},
		{ name: 'special commands', value: 'To cheer someone up and tell them that you love them:\r\n`eboy, help me out here @<username>`\r\nto matchmake someone: `uwu match @<username> @<username>` BOTH MUST BE DIFFERENT USERS.\r\n`uwu uwu <words to uwuify>`\r\n`uwu search <word to search>` [note that this is using Urban Dictionary, so some results might be ridiculous or NSFW.]\r\n`uwu duel @<username>`\r\n`uwu banner <words to turn into banner>`\r\n`uwu f / uwu f <words> / uwu f @<username>`\r\nTo timeout someone (your bot role must be higher than the person you are timing out!!!): `uwu timeout <@user> <eg: 1m/10s/24h>` [without the time, it will be for a default of 15 minutes.]\r\nTo give someone a cookie: uwu cookie <@user>' },
		{ name: 'todo list', value: 'To summon: \`uwu todo\`\r\nTo delete: \`uwu todo delete <number>\`\r\nTo add: \`uwu todo add <activity>\`\r\nTo be done: \`uwu todo done <number>\`\r\nTo clear all: \`uwu todo clear\`'},
		{ name: 'role reactions', value: 'To start: \`uwu react-settings #the-channel-your-reaction-roles-will-be-at\`'},
		{ name: 'admin commands', value: 'To enable/disable eboy to reply to "goodmorning" or "goodnight" messages: `uwu enable-interactions`/`uwu disable-interactions`'},
		{ name: 'birthday commands', value: 'Get eboy to wish you happy birthday! To start: \`uwu birthday 17 march\` (this is just an example)\r\nTo delete: \`uwu birthday delete\`\r\nTo view all the birthdays in the server: \`uwu birthday\`'}
		)
		.setFooter(`Created by Maryam#9206`);
		eboylog = client.channels.cache.get('867744429657292810')
		author = msg.author
		guild = client.guilds.cache.get(msg.guild.id)
		eboylog.send(`**${author.username}** [${author.id}] used the **help** command in **${guild}** [${msg.guild.id}].`)
		
		try {
			msg.author.send(embed);
			msg.channel.send(`Psssst. Check your DMs, **${msg.guild.members.cache.get(msg.author.id).displayName}**! :wink:`)
		} catch(err) {
			eboylog.send(`<@279101053750870017>: ERROR: Unable to use **help** command.\n${err}`)
		}
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