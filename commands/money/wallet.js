const moneyModel = require('../../models/moneySchema');
const cookieModel = require('../../models/cookieSchema')
const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
    errorlog = client.channels.cache.get('936554279878148137')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **wallet** command in **${guild}** [${msg.guild.id}].`)

    hooman = msg.author.id
    server = msg.guild.id

    moneyData = await moneyModel.findOne({userID: hooman})
    cookieData = await cookieModel.findOne({userID: hooman})


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
                    url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
                    const embed = new MessageEmbed()
                    .setColor('#FF69B4')
                    .setTitle(`**${msg.guild.members.cache.get(moneyData.userID).displayName}'s** Wallet`)
                    .setDescription('You can see your money here.')
                    .addFields(
                    { name: `Name: ${msg.guild.members.cache.get(moneyData.userID).displayName}`, value: `Gold: ${moneyData.gold} gp\nBank: ${moneyData.bank} gp\nCookie: ${cookie}`}
                    )
                    .setThumbnail(`${url}`);
                    msg.channel.send({embeds: [embed]});
                })
            }
            else {
                msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                errorlog.send(`<@279101053750870017>: Money cannot be deposited into bank. [User ID: ${author.id}, Guild ID: ${msg.guild.id}].`)
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
        const embed = new MessageEmbed()
        .setColor('#FF69B4')
        .setTitle(`**${msg.guild.members.cache.get(moneyData.userID).displayName}'s** Wallet`)
        .setDescription('You can see your money here.')
        .addFields(
        { name: `Name: ${msg.guild.members.cache.get(moneyData.userID).displayName}`, value: `Gold: ${moneyData.gold} gp\nBank: ${moneyData.bank} gp\nCookie: ${cookie}`}
        )
        .setThumbnail(`${url}`);
        msg.channel.send({embeds: [embed]});
    }

}
