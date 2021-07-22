const petModel = require('../../models/petSchema')
const Discord = require('discord.js');
const { update } = require('../../models/petSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **gift** command.`)

    if (!msg.mentions.users.size) {
        msg.channel.send(`You didn't provide any name, ${msg.author}! Are you trying to give pet food to the ghosts in the server?`);
        return 
	}
    else {
        hooman = msg.author.id
        taggedUser = msg.mentions.members.first();
        if (taggedUser.id == hooman) {
            msg.channel.send(`You can't give yourself pet food, mate.`)
            return
        }
        else {
            food = await petModel.findOne({userID: hooman, pet: "food"})

            if (!food || food.length == 0) {
                msg.channel.send(`You have no pet food to give.`)
                return
            }
            else {
                msg.channel.send(`How many pet food would you like to give? (Reply with "exit" to exit.)`)
                msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                    if(collected.first().content.toLowerCase() == "exit") {
                        msg.channel.send(`Okay, goodbye!`)
                        return
                    } 
                    else if (Number.isNaN(+(collected.first().content))) {
                        msg.channel.send(`That's not a number. Goodbye!`)
                        return
                    }
                    else {
                        num = parseInt(collected.first().content)
                        petModel.findOneAndUpdate({userID: hooman, pet: "food"}, {
                            $inc: {
                                health: -num
                            },
                            $set: {
                                updatedtime: Date.now()
                            }
                        }).then(r => {
                            if (r) {
                                petModel.findOneAndUpdate({userID: taggedUser.id, pet: "food"}, {
                                    $inc: {
                                        health: num
                                    },
                                    $set: {
                                        updatedtime: Date.now()
                                    }
                                },
                                {
                                    upsert: true
                                }).then(s => {
                                    msg.channel.send(`You have given **${taggedUser.displayName}** ${num} pet food.`)
                                })
                            }
                        })
                    }
                })
            }
        }

    }
    

}