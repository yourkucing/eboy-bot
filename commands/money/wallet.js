const moneyModel = require('../../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    
    hooman = msg.author.id
    server = msg.guild.id

    moneyData = await moneyModel.findOne({userID: hooman})
    console.log(moneyData)

    if (!moneyData) {
        wallet = moneyModel.create({
            userID: hooman,
            serverID: server
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
                    { name: `Name: ${msg.guild.members.cache.get(moneyData.userID).displayName}`, value: `Gold: ${moneyData.gold} gp`}
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
        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
        .setColor('#FF69B4')
        .setTitle(`**${msg.guild.members.cache.get(moneyData.userID).displayName}'s** Wallet`)
        .setDescription('You can see your money here.')
        .addFields(
        { name: `Name: ${msg.guild.members.cache.get(moneyData.userID).displayName}`, value: `Gold: ${moneyData.gold} gp`}
        )
        .setThumbnail(`${url}`);
        msg.channel.send(embed);
    }

}
