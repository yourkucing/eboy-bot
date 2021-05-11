const moneyModel = require('../../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

	var gifs = [
		'https://media1.tenor.com/images/06e438bb03983a7c7087618f20b2c25a/tenor.gif?itemid=8203989',
		'https://media0.giphy.com/media/Tex4wVhhs4iwKoV7YT/giphy-downsized-large.gif',
		'https://media1.tenor.com/images/a02cee03339a2156d20a968be61a6ee8/tenor.gif',
		'https://media4.giphy.com/media/2u11zpzwyMTy8/200.gif',
		'https://media.discordapp.net/attachments/673244399635005493/677734890317283338/image0.jpg'
	]

	hooman = msg.author.id
    server = msg.guild.id

	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			msg.channel.send(`You didn't provide any name, ${msg.author}! Are you trying to give your money to the ghosts in the server?`);
			return 
		}
		else {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You gave **${words}** money wow!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${words} is rich now.`);
			msg.channel.send(embed);
		}
	}
	else {
		if (!args[1]) {
			money = Math.floor(Math.random() * moneyData.gold) + 1
			extra = `(random amount since no amount was not specified any)`
		}
		else {
			money = parseInt(args[1])
			units = args[1].slice(-1)
			extra = ``
			if (units != "g") {
				msg.channel.send(`Are you sure you inputted the right format? It should be like this: 5g for 5 gold.`)
				return
			}
		}

		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You gave yourself money! Okay?`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is rich now. (Your money still stays the same, dumdum!)`);
			msg.channel.send(embed);
		}
		else {
			moneyData = await moneyModel.findOne({userID: hooman})
			taggedData = await moneyModel.findOne({userID: taggedUser.id})
			console.log(moneyData)
			console.log(taggedData)

			if (moneyData && taggedData) {
				await moneyModel.findOneAndUpdate({userID: hooman.id}, {
					$set: {
						gold: moneyData.gold - money
					}
				})

				await moneyModel.findOneAndUpdate({userID: taggedUser.id}, {
					$set: {
						gold: taggedData.gold + money
					}
				})
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`${msg.guild.members.cache.get(moneyData.userID).displayName} gave **${taggedUser.displayName}** ${money}g wow! ${extra}`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`${taggedUser.displayName} is rich now.`);
			msg.channel.send(embed);
			}

		}

	}



// module.exports.run = async(client, msg, args) => {
// 	hooman = msg.author.id
// 	moneyData = await moneyModel.findOne({userID: hooman}).then(result => {
// 		if (!result) {
// 			let wallet;
// 			try {
// 				wallet = moneyModel.create({
// 					userID: hooman,
// 					serverID: server
// 				}).then(result => {
// 					moneyData = await moneyModel.findOne({userID: hooman}).catch(err => { console.log(err)})
// 				})
// 			} catch (err) {
// 				console.log(err)
// 			}
// 		}
// 	})
	
// 	var gifs = [
// 		'https://media1.tenor.com/images/06e438bb03983a7c7087618f20b2c25a/tenor.gif?itemid=8203989',
//         'https://media0.giphy.com/media/Tex4wVhhs4iwKoV7YT/giphy-downsized-large.gif',
//         'https://media1.tenor.com/images/a02cee03339a2156d20a968be61a6ee8/tenor.gif',
//         'https://media4.giphy.com/media/2u11zpzwyMTy8/200.gif',
//         'https://media.discordapp.net/attachments/673244399635005493/677734890317283338/image0.jpg'
// 		]
// 	if (!msg.mentions.users.size) {
// 		const words = args.join(' ');
// 		if (words === "") {
// 			return msg.channel.send(`You didn't provide any name, ${msg.author}! Are you trying to give your money to the ghosts in the server?`);
// 		}
// 		else {
// 			const embed = new Discord.MessageEmbed()
// 			.setColor('#FF69B4')
// 			.setDescription(`You gave **${words}** money wow!`)
// 			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
// 			.setFooter(`${words} is rich now.`);
// 			msg.channel.send(embed);
// 		}
// 	}
// 	else {
// 		const taggedUser = msg.mentions.members.first();
// 		if (taggedUser.id === msg.author.id) {
// 			const embed = new Discord.MessageEmbed()
// 			.setColor('#FF69B4')
// 			.setDescription(`You gave yourself money! Okay?`)
// 			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
// 			.setFooter(`${taggedUser.displayName} is rich now. (Your money still stays the same, dumdum!)`);
// 			msg.channel.send(embed);
// 		}
// 		else {
// 			moneyData2 = await moneyModel.findOne({userID: taggedUser.id})
// 			if (!moneyData2) {
// 				let wallet;
// 				try {
// 					wallet = moneyModel.create({
// 						userID: hooman,
// 						serverID: server
// 					}).then(result => {
// 						moneyData2 = await moneyModel.findOne({userID: taggedUser.id})
// 					})
// 				} catch (err) {
// 					console.log(err)
// 				}
// 			}
// 			if (!args[1]) {
// 				money = Math.floor(Math.random() * moneyData.gold) + 1
// 				extra = `(random amount since no amount was not specified any)`
// 			}
// 			else {
// 				money = parseInt(args[1])
//             	units = args[1].slice(-1)
// 				extra = ``
// 				if (units != "g") {
// 					msg.channel.send(`Are you sure you inputted the right format? It should be like this: 5g for 5 gold.`)
//                     return
// 				}
// 			}
			

// 			await moneyModel.findOneAndUpdate({userID: hooman.id}, {
// 				$set: {
// 					gold: moneyData.gold - money
// 				}
// 			})

// 			await moneyModel.findOneAndUpdate({userID: taggedUser.id}, {
// 				$set: {
// 					gold: moneyData2.gold + money
// 				}
// 			})
// 			const embed = new Discord.MessageEmbed()
// 			.setColor('#FF69B4')
// 			.setDescription(`${msg.guild.members.cache.get(moneyData.userID).displayName} gave **${taggedUser.displayName}** ${money}g wow! ${extra}`)
// 			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
// 			.setFooter(`${taggedUser.displayName} is rich now.`);
// 			msg.channel.send(embed);

// 		}
// 	}

// }

// const Discord = require('discord.js');

// module.exports.run = async(client, msg, args) => {
// 	var gifs = [
// 		'https://media1.tenor.com/images/06e438bb03983a7c7087618f20b2c25a/tenor.gif?itemid=8203989',
//         'https://media0.giphy.com/media/Tex4wVhhs4iwKoV7YT/giphy-downsized-large.gif',
//         'https://media1.tenor.com/images/a02cee03339a2156d20a968be61a6ee8/tenor.gif',
//         'https://media4.giphy.com/media/2u11zpzwyMTy8/200.gif',
//         'https://media.discordapp.net/attachments/673244399635005493/677734890317283338/image0.jpg'
// 		]
// 	if (!msg.mentions.users.size) {
// 		const words = args.join(' ');
// 		if (words === "") {
// 			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
// 		}
// 		else {
// 			const embed = new Discord.MessageEmbed()
// 			.setColor('#FF69B4')
// 			.setDescription(`You gave **${words}** money wow!`)
// 			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
// 			.setFooter(`${words} is rich now.`);
// 			msg.channel.send(embed);
// 		}
// 	}
// 	else {
// 		const taggedUser = msg.mentions.members.first();
// 		if (taggedUser.id === msg.author.id) {
// 			const embed = new Discord.MessageEmbed()
// 			.setColor('#FF69B4')
// 			.setDescription(`You gave yourself money! Okay?`)
// 			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
// 			.setFooter(`${taggedUser.displayName} is rich now.`);
// 			msg.channel.send(embed);
// 		}
// 		else {
// 			const embed = new Discord.MessageEmbed()
// 			.setColor('#FF69B4')
// 			.setDescription(`You gave **${taggedUser.displayName}** money wow!`)
// 			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
// 			.setFooter(`${taggedUser.displayName} is rich now.`);
// 			msg.channel.send(embed);

// 		}
// 	}
}