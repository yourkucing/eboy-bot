const moneyModel = require('../../models/moneySchema');
const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
    errorlog = client.channels.cache.get('936554279878148137')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **deposit** command in **${guild}** [${msg.guild.id}].`)

    hooman = msg.author.id
    server = msg.guild.id

    moneyData = await moneyModel.findOne({userID: hooman})


    if (!moneyData) {
        msg.channel.send(`You do not have any wallet. Use \`uwu wallet\` to create your wallet.`)
    }
    else {
        moneyModel.findOneAndUpdate({userID: hooman}, {
            $inc: {
                bank: moneyData.gold,
                gold: -moneyData.gold
            }
        }).then(result => {
            if (!result) {
                msg.channel.send(`\`An error has occurred. Please try again. If error persists, contact Maryam#9206.\``)
                errorlog.send(`<@279101053750870017>: Money cannot be deposited into bank. [User ID: ${author.id}, Guild ID: ${msg.guild.id}].`)
            }
            else {
                const embed = new MessageEmbed()
                .setColor('#FF69B4')
                .setDescription(`**${moneyData.gold} gp** has been deposited into your bank.`);
                msg.channel.send({embeds: [embed]});
            }
        })

    }

}
