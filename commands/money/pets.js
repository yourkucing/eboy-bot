const petModel = require('../../models/petSchema')
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    msg.channel.send(`hi`)
    hooman = msg.author.id
    pets = await petModel.find({userID: hooman})

    url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
    const embed = new Discord.MessageEmbed()
    embed.setColor('#FF69B4')
    embed.setTitle(`**${msg.guild.members.cache.get(hooman).displayName}'s** Wallet`)
    embed.setDescription(`You can view your pets here.`)

    if (pets.length == 0) {
        embed.addField({value: `You have no pets.`})
    }
    else {
        for (x in pets) {

            hpbar = '░░░░░░░░░░'
            mood = ''
    
            if (pets[x].health == 0) {
                hpbar = '░░░░░░░░░░'
                mood = 'Fainted'
            }
            else if (pets[x].health == 1) {
                hpbar = '█░░░░░░░░░'
                mood = 'Almost fainted'
            }
            else if (pets[x].health == 2) {
                hpbar = '██░░░░░░░░'
                mood = 'Really hungry'
            }
            else if (pets[x].health == 3) {
                hpbar = '███░░░░░░░'
                mood = 'Really hungry'
            }
            else if (pets[x].health == 4) {
                hpbar = '████░░░░░░'
                mood = 'Hungry'
            }
            else if (pets[x].health == 5) {
                hpbar = '█████░░░░░'
                mood = 'Hungry'
            }
            else if (pets[x].health == 6) {
                hpbar = '██████░░░░'
                mood = 'Fine'
            }
            else if (pets[x].health == 7) {
                hpbar = '███████░░░'
                mood = 'Satisfied'
            }
            else if (pets[x].health == 8) {
                hpbar = '████████░░'
                mood = 'Happy'
            }
            else if (pets[x].health == 9) {
                hpbar = '█████████░'
                mood = 'Excited'
            }
            else if (pets[x].health == 10) {
                hpbar = '██████████'
                mood = 'Really happy to see you!'
            }
    


            embed.addField({name: `${pets[x].pet}: ${pets[x].petname}`, value: `**Type:** ${pets[x].type}\n**Personality:** ${pets[x].personality}\n\n**Mood:** ${mood}\n**Health:** ${hpbar}`, inline: true})
        }
    }

    embed.setThumbnail(`${url}`);
    msg.channel.send(embed)
}