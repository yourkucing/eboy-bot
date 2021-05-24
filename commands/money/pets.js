const petModel = require('../../models/petSchema')
const Discord = require('discord.js');
const { update } = require('../../models/petSchema');

module.exports.run = async(client, msg, args) => {
    hooman = msg.author.id
    words = args.join(" ")
    pets = await petModel.find({userID: hooman, pet: {$ne: "food"}})
    food = await petModel.findOne({userID: hooman, pet: "food"})

    if (food.length == 0) {
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
                console.log(hungry)
                if (hungry > 90) {
                    msg.channel.send(`Your ${pets[x].pet}, ${pets[x].petname} ran away because they were hungry and neglected for more than 3 months! Please take better care of your pets.`)
                    deleted = await petModel.deleteOne({_id: pets[x]._id})
                    if (!deleted) {
                        console.log(`Error in deleting pets after neglected.`)
                        continue
                    }
                    else {
                        console.log(`Deleted neglected pets!`)
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
                    console.log(updatepet)
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
                        console.log(updatepet)
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
                        petModel.findOneAndUpdate({_id: pets[x]._id}, {
                            $set: {
                                health: 10
                            },
                            $set: {
                                updatedtime: date
                            }
                        }).then(updatepet => {
                            if (updatepet) {
                                petModel.findOneAndUpdate({userID: hooman, pet: "food"}, {
                                    $inc: {
                                        health: -1
                                    },
                                    $set: {
                                        updatedtime: Date.now()
                                    }
                                }).then(updatefood => {
                                    if (!updatefood) {
                                        msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                                        console.log(updatepet)
                                        return
                                    }
                                })
                            }
                        })
                        

                    msg.channel.send(`Pets have been fed!`)
                    

                    
                    
                }
            }
        }
    }

}