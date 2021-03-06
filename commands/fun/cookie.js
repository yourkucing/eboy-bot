const Discord = require('discord.js');
const cookieModel = require('../../models/cookieSchema');

module.exports.run = async(client, msg, args) => {
    if (!msg.mentions.users.size) {
        msg.channel.send("Uh... Who did you want to give cookie to? The server ghost?")
        return
    }
    else {
        hooman = msg.author
        taggedUser = msg.mentions.members.first();

		taggedData = await cookieModel.findOne({userID: taggedUser.id})

        if (taggedData) {
            await cookieModel.findOneAndUpdate({userID: taggedUser.id}, {
                $set: {
                    cookie: taggedData.cookie + 1
                }
            })
            const embed = new Discord.MessageEmbed()
            .setColor('#FF69B4')
            .setDescription(`${msg.guild.members.cache.get(hooman.id).displayName} gave **${taggedUser.displayName}** a cookie yay! :cookie:`)
            .setFooter(`${taggedUser.displayName} has ${taggedData.cookie + 1} cookies.`);
            msg.channel.send(embed);
        }
        else {
            cookie = cookieModel.create({
                userID: taggedUser.id
            }).catch((e) => { console.log(e); }).then(t => {
                if (!t) {
                    msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                    console.log(r)
                    return
                }
                else {
                    console.log('Successful!')
                }
            })
            const embed = new Discord.MessageEmbed()
            .setColor('#FF69B4')
            .setDescription(`${msg.guild.members.cache.get(hooman.id).displayName} gave **${taggedUser.displayName}** a cookie yay! :cookie:`)
            .setFooter(`${taggedUser.displayName} has 1 cookie.`);
            msg.channel.send(embed);
        }
    }
}