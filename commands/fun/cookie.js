const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const cookieModel = require('../../models/cookieSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **cookie** command in **${guild}** [${msg.guild.id}].`)

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
            const embed = new MessageEmbed()
            .setColor('#FF69B4')
            .setDescription(`${msg.guild.members.cache.get(hooman.id).displayName} gave **${taggedUser.displayName}** a cookie yay! :cookie:`)
            .setFooter(`${taggedUser.displayName} has ${taggedData.cookie + 1} cookies.`);
            msg.channel.send({embeds: [embed]});
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
            const embed = new MessageEmbed()
            .setColor('#FF69B4')
            .setDescription(`${msg.guild.members.cache.get(hooman.id).displayName} gave **${taggedUser.displayName}** a cookie yay! :cookie:`)
            .setFooter(`${taggedUser.displayName} has 1 cookie.`);
            msg.channel.send({embeds: [embed]});
        }
    }
}