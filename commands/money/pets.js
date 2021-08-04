const petModel = require('../../models/petSchema')
const Discord = require('discord.js');
const { update } = require('../../models/petSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **pets** command in **${guild}** [${msg.guild.id}].`)
    
    hooman = msg.author.id
    words = args.join(" ")
    pets = await petModel.find({userID: hooman, pet: {$ne: "food"}})
    food = await petModel.findOne({userID: hooman, pet: "food"})

    if (!food || food.length == 0) {
        petfood = 0
    }
    else {
        petfood = food.health
    }

    if (!words) {
        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
        .setColor('#FF69B4')
        .setTitle(`**${msg.guild.members.cache.get(hooman).displayName}'s** Pets`)
        .setDescription(`You have ${petfood} pet food.`);
    
        if (pets.length == 0) {
            embed.addFields({name: `No pets`, value: `You have no pets.`})
        }
        else {
            for (x in pets) {
                date = Date.now()
                hungry = Math.floor((date-pets[x].updatedtime)/86400000)
                if (hungry > 90) {
                    msg.channel.send(`Your ${pets[x].pet}, ${pets[x].petname} ran away because they were hungry and neglected for more than 3 months! Please take better care of your pets.`)
                    deleted = await petModel.deleteOne({_id: pets[x]._id})
                    if (!deleted) {
                        eboylog.send(`<@279101053750870017> **ERROR:** Eboy has trouble with **deleting runaway pets**. [pets ID: ${pets[x]._id}]`)
                        continue
                    }
    
                }
    
                if (hungry == 0) {
                    date = pets[x].updatedtime
                }
    
                if (pets[x].health-hungry < 0) {
                    hungry = pets[x].health
                }
    
                    
                updatepet = await petModel.findOneAndUpdate({_id: pets[x]._id}, {
                    $inc: {
                        health: -hungry
                    },
                    $set: {
                        updatedtime: date
                    }
                }, {
                    new: true
                });
                    if (updatepet) {
                        hpbar = '░░░░░░░░░░'
                        mood = ''
                
                        if (updatepet.health == 0) {
                            hpbar = '░░░░░░░░░░'
                            mood = 'Fainted'
                        }
                        else if (updatepet.health == 1) {
                            hpbar = '█░░░░░░░░░'
                            mood = 'Almost fainted'
                        }
                        else if (updatepet.health == 2) {
                            hpbar = '██░░░░░░░░'
                            mood = 'Really hungry'
                        }
                        else if (updatepet.health == 3) {
                            hpbar = '███░░░░░░░'
                            mood = 'Really hungry'
                        }
                        else if (updatepet.health == 4) {
                            hpbar = '████░░░░░░'
                            mood = 'Hungry'
                        }
                        else if (updatepet.health == 5) {
                            hpbar = '█████░░░░░'
                            mood = 'Hungry'
                        }
                        else if (updatepet.health == 6) {
                            hpbar = '██████░░░░'
                            mood = 'Fine'
                        }
                        else if (updatepet.health == 7) {
                            hpbar = '███████░░░'
                            mood = 'Satisfied'
                        }
                        else if (updatepet.health == 8) {
                            hpbar = '████████░░'
                            mood = 'Happy'
                        }
                        else if (updatepet.health == 9) {
                            hpbar = '█████████░'
                            mood = 'Excited'
                        }
                        else if (updatepet.health == 10) {
                            hpbar = '██████████'
                            mood = 'Really happy to see you!'
                        }
                        embed.addFields({name: `${updatepet.pet.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}: ${updatepet.petname}`, value: `**Type:** ${updatepet.type}\n**Personality:** ${updatepet.personality}\n\n**Mood:** ${mood}\n**Health:** ${hpbar}`, inline: true})
    
                    }
                    else {
                        msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                        eboylog.send(`<@279101053750870017> **ERROR:** Eboy has trouble with **updating pets' health decline**. [pets ID: ${pets[x]._id}]`)
                        return
                    }
        
    
            }
        }
    
        embed.setThumbnail(`${url}`);
        msg.channel.send(embed)
    }
    else if (words == "feed") {
        if (pets.length == 0) {
            msg.channel.send(`You have no pets to feed. You can buy them from the petstore (__uwu petstore__).`)
        }
        else {
            if (food.length == 0) {
                msg.channel.send(`You do not have any pet food. You can buy them from the petstore (__uwu petstore__).`)
            }
            else {
                if (food.health < pets.length) {
                    msg.channel.send(`You do not have enough food to feed your pets.`)
                }
                else {
                    for (x in pets) {
                        updatepet = await petModel.findOneAndUpdate({_id: pets[x]._id}, {
                            $set: {
                                health: 10,
                                updatedtime: Date.now()
                            }
                        })
                    }
                    updatefood = await petModel.findOneAndUpdate({userID: hooman, pet: "food"}, {
                        $inc: {
                            health: -pets.length
                        },
                        $set: {
                            updatedtime: Date.now()
                        }
                    })

                    if (updatefood) {
                        msg.channel.send(`Pets have been fed.`)
                    }
                    else {
                        msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                        eboylog.send(`<@279101053750870017> **ERROR:** Eboy has trouble with **updating pets food**. [user ID: ${hooman}]`)
                        return
                    }
                    
                }
            }
        }
    }
    else if (words == "rename") {
        if (pets.length == 0) {
            msg.channel.send(`You have no pets to rename. You can buy them from the petstore (__uwu petstore__).`)
        }
        else {
            petlist = 'Reply with the number of which pet you want to rename.\n'
            n=1
            for (x in pets) {
                petlist += `**${n}.** ${pets[x].pet}: ${pets[x].petname}\n`
                n=n+1
            }
            msg.channel.send(petlist)
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (Number.isNaN(+(collected.first().content))) {
                    msg.channel.send(`That's not a number.`)
                    return
                }
                else {
                    number = parseInt(collected.first().content)
                    msg.channel.send(`Please state the new name: ("exit" to exit.)`)
                    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                        if(collected.first().content.toLowerCase() == "exit") {
                            msg.channel.send(`Okay, goodbye!`)
                            return
                        } 
                        else {
                            petModel.findOneAndUpdate({_id: pets[number-1]._id}, {
                                $set: {
                                    petname: collected.first().content
                                }
                            }).then(changename => {
                                if (changename) {
                                    msg.channel.send(`Pet's name has been changed to ${collected.first().content}.`)
                                }
                                else {
                                    msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                                    eboylog.send(`<@279101053750870017> **ERROR:** Eboy has trouble with **changing pets name**. [pets ID: ${pets[number-1]._id}]`)
                                    return
                                }
                            })
                        }
                    })
                }
            })
        }
    }

}