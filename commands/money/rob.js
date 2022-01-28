const moneyModel = require('../../models/moneySchema');
const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **rob** command in **${guild}** [${msg.guild.id}].`)

	hooman = msg.author.id
    server = msg.guild.id

	if (!msg.mentions.users.size) {
        msg.channel.send(`You didn't provide any name, ${msg.author}! Are you trying to rob the ghosts in the server?`);
        return 
	}
	else {
        const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You gave yourself money! Okay?`)
			.setFooter(`${taggedUser.displayName} is rich now. (Your money still stays the same, dumdum!)`);
			msg.channel.send(embed);
		}
		else {
			moneyData = await moneyModel.findOne({userID: hooman})
			taggedData = await moneyModel.findOne({userID: taggedUser.id})
            result = Math.floor(Math.random() * 20) + 1
            if (result < 17) {
                if (!moneyData) {
                    fine = Math.floor(Math.random() * 20) + 1
                    wallet = moneyModel.create({
                        userID: hooman,
                        serverID: server,
                        createdby: hooman
                    }).catch((e) => { console.log(e); }).then(r => {
                        if(r) {
                            moneyModel.findOneAndUpdate({userID: hooman}, {
                                $inc: {
                                    gold: -1 * fine
                                }
                            }).then(t => {
                                if (t) {
                                    const embed = new Discord.MessageEmbed()
                                    .setColor('#FF69B4')
                                    .setDescription(`You were caught stealing. Please pay a fine of ${fine}g. Thank you!`)
                                    .setFooter(`TSK TSK TSK, how could you?`);
                                    msg.channel.send(embed);
                                }
                            })
                        }
                    })
                }
                else{
                    fine = Math.floor(Math.random() * (moneyData.gold/10)) + 1
                    moneyModel.findOneAndUpdate({userID: hooman}, {
                        $inc: {
                            gold: -1 * fine
                        }
                    }).then(t => {
                        if(t) {
                            const embed = new Discord.MessageEmbed()
                            .setColor('#FF69B4')
                            .setDescription(`You were caught stealing. Please pay a fine of ${fine}g. Thank you!`)
                            .setFooter(`TSK TSK TSK, how could you?`);
                            msg.channel.send(embed);
                        }
                    })
                }
            }
            else {
                if (!taggedData) {
                    const embed = new Discord.MessageEmbed()
                    .setColor('#FF69B4')
                    .setDescription(`**${taggedUser.displayName}** has no wallet for you to steal! Get them to use \`uwu wallet\`.`)
                    .setFooter(`Don't rob the poor!`);
                    msg.channel.send(embed);
                    return
                }
                else {
                    robmoney = Math.floor(Math.random() * (taggedData.gold * (10/100))) + 1
                    moneyModel.findOneAndUpdate({userID: hooman}, {
                        $inc: {
                            gold: robmoney
                        }
                    }).then(t => {
                        if(t) {
                            moneyModel.findOneAndUpdate({userID: taggedUser.id}, {
                                $inc: {
                                    gold: -1 * robmoney
                                }
                            }).then(s => {
                                if (s) {
                                    const embed = new Discord.MessageEmbed()
                                    .setColor('#FF69B4')
                                    .setDescription(`**${taggedUser.displayName}** has been robbed off ${robmoney}g.`)
                                    .setFooter(`Someone call the police! Quick!`);
                                    msg.channel.send(embed);
                                }
                            })
                        }
                    })
                }
            }
        }
    }

}