const channelModel = require('../../models/channelSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    channelID = msg.channel.id
    channelModel.create({
        channelID: channelID
    }).then(r => {
        if (r) {
            msg.react(`✅`)
        }
        else {
            msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
        }
    })
}