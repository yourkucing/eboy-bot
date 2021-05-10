const moneyModel = require('../../../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    let server = msg.guild.id
    moneyData = await moneyModel.findOne({userID: hooman})
    if (!moneyData) {
        msg.channel.send(`Oh, you do not have a wallet! Let me create one for you...`)
        money = 0

        let wallet;
        try {
            wallet = moneyModel.create({
                userID: hooman,
                serverID: server
            }).then(result => {
                newmoneyData = await moneyModel.findOne({userID: hooman})
                url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
                const embed = new Discord.MessageEmbed()
                .setColor('#FF69B4')
                .setTitle(`**${msg.guild.members.cache.get(newmoneyData.userID).displayName}'s** Wallet`)
                .setDescription('You can see your money here.')
                .addFields(
                { name: `Name: ${msg.guild.members.cache.get(newmoneyData.userID).displayName}`, value: `Gold: ${newmoneyData.gold} gp`}
                )
                .setThumbnail(`${url}`);
                msg.channel.send(embed);
            })
        } catch (err) {
            console.log(err)
        }
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