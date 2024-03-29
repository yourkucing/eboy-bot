const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS], disableEveryone: false, partials: ['MESSAGE', 'REACTION']});
const prefix = "uwu ";
const ud = require('urban-dictionary');
const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');
const timeoutModel = require('./models/timeoutSchema');
const ghostModel = require('./models/ghostSchema');
const channelModel = require('./models/channelSchema');
const moneyModel = require('./models/moneySchema');
const sprintModel = require('./models/sprintSchema');
const birthdayModel = require('./models/birthdaySchema');
const reactionsModel = require('./models/reactionsSchema');
const autoroleModels = require('./models/autoroleSchema');
const writingModel = require('./models/writingSchema');
const paginationEmbed = require('discordjs-button-pagination');



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
				if (!timeoutrole) {
					channel.send(`<@${userID}>, your timeout has ended!\nIt seems that we are unable to remove your timeout role.\nEither you have taken it off or the role does not follow the general name "Time Out Corner".`)
					eboylog = client.channels.cache.get('867744429657292810')
					eboylog.send(`Timeout has ended for User ID: ${userID}.`)
					
					await timeoutModel.deleteOne({userID: userID, serverID: guildID, channelID: channelID}).catch(e => {
						eboylog = client.channels.cache.get('867744429657292810')
						eboylog.send(`<@279101053750870017>: Unable to remove user from timeout database. [User ID: ${userID}]\n${e}`)
					})
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
	}

	setTimeout(checkforTimeouts, 1000 * 10)
}

const checkforBirthdays = async() => {
	day = new Date().getDate()
	month = new Date().getMonth() + 1
	if (new Date().getUTCHours() == 6 && new Date().getUTCMinutes() == 0) {
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
						channel.send(`Happy birthday, <@${userID}>! I hope you have an amazing birthday uwu. I dub thee the coolest person on the face on this Earth and today is YOUR day. Go out there and wreck havoc! :3`)
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
					const filter = m => m.author.id == userID2
					channel2.awaitMessages({filter, max: 1, time: 55000}).then(collected => {
						if (isNaN(parseInt(collected.first().content))) {
							channel2.send("That's not a number, bro. Count it ya self, goodbye XD")
							sprintModel.deleteOne({userID: userID2, serverID: guildID2, channelID: channelID2}).then(deleted => {
								eboylog = client.channels.cache.get('867744429657292810')
								eboylog.send(`Sprint ended for User ID: ${userID2}.`)
							}).catch(e => {
								eboylog = client.channels.cache.get('867744429657292810')
								eboylog.send(`<@279101053750870017>: Unable to remove user from sprint database. [User ID: ${userID2}]\n${e}`)
							})
						}
						else {
							newwordcount = parseInt(collected.first().content)
							writingModel.findOne({userID: userID2, serverID: guildID2}).then(found => {
								if (found) {
									channel2.send(`Nice. You wrote ${newwordcount - found.wordcount} words. Good job, mate!`)
									writingModel.findOneAndUpdate({userID: userID2, serverID: guildID2},
										{
											$set: {
												wordcount: newwordcount
											}
										}).then(updated => {
											if (updated) {
												sprintModel.deleteOne({userID: userID2, serverID: guildID2, channelID: channelID2}).then(deleted => {
													eboylog = client.channels.cache.get('867744429657292810')
													eboylog.send(`Sprint ended for User ID: ${userID2}.`)
												}).catch(e => {
													eboylog = client.channels.cache.get('867744429657292810')
													eboylog.send(`<@279101053750870017>: Unable to remove user from sprint database. [User ID: ${userID2}]\n${e}`)
												})
											}
										})
								}
								else {
									writingModel.create({
										userID: userID2,
										serverID: guildID2,
										wordcount: newwordcount
									}).then(created => {
										if (created) {
											channel2.send(`Nice. You wrote ${newwordcount} words. Good job, mate! [You have been added to the database, you can check your wordcount at \`uwu writing\`]`)
											sprintModel.deleteOne({userID: userID2, serverID: guildID2, channelID: channelID2}).then(deleted => {
												eboylog = client.channels.cache.get('867744429657292810')
												eboylog.send(`Sprint ended for User ID: ${userID2}.`)
											}).catch(e => {
												eboylog = client.channels.cache.get('867744429657292810')
												eboylog.send(`<@279101053750870017>: Unable to remove user from sprint database. [User ID: ${userID2}]\n${e}`)
											})
										}
									})
								}
							})
						}
					})
					.catch(collected => {
						channel2.send(`<@${userID2}> One last reminder that your writing sprint is up! Byebye :3`)
						sprintModel.deleteOne({userID: userID2, serverID: guildID2, channelID: channelID2}).then(deleted => {
							eboylog = client.channels.cache.get('867744429657292810')
							eboylog.send(`Sprint ended for User ID: ${userID2}.`)
						}).catch(e => {
							eboylog = client.channels.cache.get('867744429657292810')
							eboylog.send(`<@279101053750870017>: Unable to remove user from sprint database. [User ID: ${userID2}]\n${e}`)
						})
					})
				}
			}
		}
	})

	setTimeout(checkforSprints, 1000 * 60)
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
/* 	client.channels.fetch("943771114897829919").then(channel => {
		channel.messages.fetch("943778980308348948").then(message => {
			message.react("🗃️");
		})
	})
	client.channels.fetch("943712192434405477").then(channel => {
		channel.messages.fetch("943770740635881472").then(message => {
			message.react("🗃️");
		})
	}) */
/* 	client.channels.fetch("943712192434405477").then(channel => {
		channel.messages.fetch(`943770740635881472`).then(message => {
			oldmsg = message.content
			message.edit(`${message.content}\n🗃️ for <@&943921586132619274>`);
		}).catch(err => {
			console.error(err);
		});
	})
	client.channels.fetch("943771114897829919").then(channel => {
		channel.messages.fetch(`943778980308348948`).then(message => {
			oldmsg = message.content
			message.edit(`${message.content}\n🗃️ for <@&943921594563178517>`);
		}).catch(err => {
			console.error(err);
		});
	}) */
 });

 client.on('guildCreate', guild => {
	eboylog = client.channels.cache.get('867744429657292810')
	eboylog.send(`Eboy just joined a new server: **${guild.name}** [Total: ${client.guilds.cache.size} servers]`)

	guild.systemChannel.send(`Hello there! Thank you for using Eboy bot uwu!\n\nYou can start off by doing \`uwu help\` to see all the relevant commands. You can also enable interactions by eboy (mainly having him reply to your goodmorning or goodnight) by running the command \`uwu enable-interactions\`. Of course, only admins can do this!\n\nMaryam#9206 built me. If you have any questions, complaints or suggestions, you can DM her.\nYou can also submit your suggestion or feedback here: https://cookie-codes.tumblr.com/eboy/askme though dont forget to leave down your name and a way to contact you, just in case there are questions we need to specify!\n\nYou can also join our discord server for any updates on Eboy: https://discord.gg/jy7yx4UrAV (∩•̀ω•́)⊃-⋆`)
	
	});
	
client.on('guildMemberAdd', member => {
	autoroleModels.findOne({serverID: member.guild.id}).then(addpeople => {
		if(addpeople){
			if (member.bot) return;
			const newbieRole = member.guild.roles.cache.get(addpeople.roleID) // that was to define the role to give newbies (you can name the variable however you want that doesn't matter!)
			member.roles.add(newbieRole.id) // this will add the role to that member!
		}
	}) 
 	if (member.guild.id == "943584555351298088") {
		if (member.bot) return; // checks if it's a bot that joined so the channel won't be spammed with "*Discord Bot* has joined the server" and stuff like that, so check that.
		const welcomeChannel = member.guild.channels.cache.get('943584555351298091')
		welcomeChannel.send(`Welcome ${member} to hell. But it's alright, we're here to help you through it. But first, head on over to <#943715281476407336> as well as <#943663520829038602> to get yourself familiarise! :heart:\n\n\`welcome to the homework struggle bus. those who struggle together, succeed together! we hope you have a pleasant stay.\` :heart:`)
	} 
	if (member.guild.id == "912635515965165588") {
			// IMPORTANT NOTE: Make Sure To Use async and rename bot to client or whatever name you have for your bot events!
			const welcomeChannel = member.guild.channels.cache.get('912651462616698890')
			welcomeChannel.send(`Welcome ${member} to the integrated server of Eboy and Issie Codes. Head on to read the rules at #rules-rules-rules and then get your roles from #come-get-your-roles :heart:`)

			if (member.bot) return; // checks if it's a bot that joined so the channel won't be spammed with "*Discord Bot* has joined the server" and stuff like that, so check that.
			const newbieRole = member.guild.roles.cache.get('912653061611208704') // that was to define the role to give newbies (you can name the variable however you want that doesn't matter!)
			member.roles.add(newbieRole.id) // this will add the role to that member!
	}
})

client.on('guildDelete', guild => {
	if (typeof guild.name != "undefined") {
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
	}
});	

client.on('guildMemberRemove', member => {
	userID = member.id
	serverID = member.guild.id
	eboylog = client.channels.cache.get('867744429657292810')
	birthdayModel.deleteOne({serverID: member.guild.id, userID: member.id}).then().catch(e => eboylog.send(`<@279101053750870017>, unable to delete birthday from database [${userID}].\n${e}`))
	timeoutModel.deleteOne({serverID: member.guild.id, userID: member.id}).then().catch(e => eboylog.send(`<@279101053750870017>, unable to delete birthday from database [${userID}].\n${e}`))

})

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
	if (user.bot) return
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
		
		if (!user.bot) {
			if (emoji == null) {
				emoji = reaction.emoji.name
			}
			reactionmsg = await reactionsModel.findOne({serverID: serverID, channelID: channelID, messageID: messageID, emoji: emoji})
	
			if (!reactionmsg) {
				//nothing happens
			}
			else {
				if (users.roles.cache.some(role => role.id === reactionmsg.role)) {
					//nothing happens
				}
				else {
					console.log(reactionmsg.role)
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
	if (user.bot) return
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
			if (users.roles.cache.some(role => role.id === reactionmsg.role)) {
				role = guild.roles.cache.get(reactionmsg.role)
				users.roles.remove(role)
			}
		}
	} catch(err) {
		console.log(err)
	}
});

client.on('messageCreate', msg => {

if (msg.author.bot) return

channelModel.findOne({channelID: msg.channel.id}).then(moneychannel => {
	if(moneychannel){

		moneyModel.findOneAndUpdate({userID: msg.author.id}, {
			$inc: {
				gold: 2
			}
		}).then().catch(e => {console.log(e)})
	}
})

ghostModel.findOne({serverID: msg.guild.id, channelID: msg.channel.id, userID: msg.author.id}).then(ghost => {
	if(ghost) {
		diffTime = Math.abs(ghost.createdon - Date.now())
		var chat = [
			'𝕸𝖒𝖒... 𝕬𝖓𝖉....?',
			'𝕬𝖒 𝕴 𝖘𝖚𝖕𝖕𝖔𝖘𝖊𝖉 𝖙𝖔 𝖈𝖆𝖗𝖊?',
			'𝕯𝖔 𝕴 𝖗𝖊𝖆𝖑𝖑𝖞 𝖍𝖆𝖛𝖊 𝖙𝖔 𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖙𝖍𝖆𝖙?',
			'𝕴\'𝖒 𝖆𝖑𝖗𝖊𝖆𝖉𝖞 𝖇𝖔𝖗𝖊𝖉.',
			'𝕯𝖎𝖉 𝖞𝖔𝖚 𝖘𝖚𝖒𝖒𝖔𝖓 𝖆 𝖌𝖍𝖔𝖘𝖙 𝖏𝖚𝖘𝖙 𝖙𝖔 𝖈𝖍𝖆𝖙? ...... 𝕻𝖆𝖙𝖍𝖊𝖙𝖎𝖈.',
			'𝖂𝖍𝖆𝖙𝖊𝖛𝖊𝖗.',
			'𝕴𝖘 𝖙𝖍𝖎𝖘 𝖙𝖍𝖊 𝖓𝖊𝖜 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖎𝖔𝖓 𝖔𝖋 𝖆𝖑𝖎𝖛𝖊 𝖕𝖊𝖔𝖕𝖑𝖊? 𝕴\'𝖒 𝖌𝖑𝖆𝖉 𝕴\'𝖒 𝖉𝖊𝖆𝖉 𝖙𝖍𝖊𝖓.',
			'𝕬 𝖈𝖔𝖗𝖕𝖘𝖊 𝖍𝖆𝖘 𝖇𝖊𝖙𝖙𝖊𝖗 𝖈𝖔𝖓𝖛𝖊𝖗𝖘𝖆𝖙𝖎𝖔𝖓 𝖘𝖐𝖎𝖑𝖑𝖘 𝖙𝖍𝖆𝖓 𝖞𝖔𝖚.',
			'𝕳𝖔𝖜 𝖉𝖎𝖉 𝖊𝖇𝖔𝖞 𝖕𝖚𝖙 𝖚𝖕 𝖜𝖎𝖙𝖍 𝖞𝖔𝖚? 𝕴 𝖈𝖆𝖓\'𝖙 𝖊𝖛𝖊𝖓.',
			'𝖂𝖍𝖞 𝖜𝖔𝖚𝖑𝖉 𝖞𝖔𝖚 𝖘𝖚𝖒𝖒𝖔𝖓 𝖆 𝖌𝖍𝖔𝖘𝖙? 𝕬𝖗𝖊 𝖞𝖔𝖚 𝖙𝖍𝖆𝖙 𝖑𝖔𝖓𝖊𝖑𝖞?',
			'𝕯𝖔 𝕴 𝖌𝖊𝖙 𝖈𝖔𝖔𝖐𝖎𝖊𝖘 𝖋𝖔𝖗 𝖕𝖊𝖔𝖕𝖑𝖊 𝖜𝖆𝖘𝖙𝖎𝖓𝖌 𝖒𝖞 𝖙𝖎𝖒𝖊?'
		]
		if (diffTime <= 30000) {
			msg.channel.send(chat[Math.floor(Math.random()*chat.length)])
		}
		else {
			ghostModel.deleteOne({serverID: ghost.serverID, userID: ghost.userID, channelID: ghost.channelID, createdon: ghost.createdon}).then(r => {
				if (r) {
					msg.channel.send(`𝕳𝖒𝖒... 𝕲𝖔𝖔𝖉𝖇𝖞𝖊.`)
				}
			})

		}
	}
})

if (msg.channel.id == "912635515965165595" || msg.channel.id == "912658398179377174") {
	msg.react('👍').then(k => {
		msg.react('👎')
	})
}

if (msg.channel.id == "912668841602072577") {
	content = msg.content
	msg.delete()
	client.channels.cache.get('912674916757811251').send(`HOI, THERE IS AN ISSUE IN EBOY/ISSIE SERVER: **${content}**.`)
}



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
	if (msg.channel.type === 'DM' && !msg.author.bot ) return msg.reply('None of these commands can be run in DMs. Please run them in a server where I am in.');
	const words = args.join(' ');
	msg.channel.send(words.replace(/r/g,'w').replace(/s/g,'sh').replace(/l/g,'w').replace(/R/g,'W').replace(/S/g,'Sh').replace(/L/g,'W') + ' uwu');
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

 if(client.commands.get(command)) {
	 client.commands.get(command).run(client, msg, args).catch((e) => { console.log(e); });
 }

//-----------------------------------------------------------------------------------------------------------------------------------------
 
 
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