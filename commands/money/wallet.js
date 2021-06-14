const moneyModel = require('../../models/moneySchema');
const cookieModel = require('../../models/cookieSchema')
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    hooman = msg.author.id
    server = msg.guild.id

    moneyData = await moneyModel.findOne({userID: hooman})
    cookieData = await cookieModel.findOne({userID: hooman})
    console.log(moneyData)

    if (!moneyData) {
        if (!cookieData) {
            cookie = 0
        }
        else {
            cookie = cookieData.cookie
        }
        wallet = moneyModel.create({
            userID: hooman,
            serverID: server,
            createdby: hooman
        }).catch((e) => { console.log(e); }).then(result => {
            if (result) {
                moneyModel.findOne({userID: hooman}).then(moneyData => {
                    console.log(moneyData)
                    url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
                    const embed = new Discord.MessageEmbed()
                    .setColor('#FF69B4')
                    .setTitle(`**${msg.guild.members.cache.get(moneyData.userID).displayName}'s** Wallet`)
                    .setDescription('You can see your money here.')
                    .addFields(
                    { name: `Name: ${msg.guild.members.cache.get(moneyData.userID).displayName}`, value: `Gold: ${moneyData.gold} gp\nCookie: ${cookie}`}
                    )
                    .setThumbnail(`${url}`);
                    msg.channel.send(embed);
                })
            }
            else {
                msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                console.log(result)
                return
            }
        })
        
    }
    else {
        if (!cookieData) {
            cookie = 0
        }
        else {
            cookie = cookieData.cookie
        }
        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
        .setColor('#FF69B4')
        .setTitle(`**${msg.guild.members.cache.get(moneyData.userID).displayName}'s** Wallet`)
        .setDescription('You can see your money here.')
        .addFields(
        { name: `Name: ${msg.guild.members.cache.get(moneyData.userID).displayName}`, value: `Gold: ${moneyData.gold} gp\nCookie: ${cookie}`}
        )
        .setThumbnail(`${url}`);
        msg.channel.send(embed);
    }

}
