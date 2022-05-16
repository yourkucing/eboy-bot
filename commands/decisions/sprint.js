const { Client, Intents, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const sprintModel = require('../../models/sprintSchema')
const ms = require('ms');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guildID = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **sprint** command in **${guildID}** [${msg.guild.id}].`)

    sprinter = msg.author.id
    guild = msg.guild.id
    channel = msg.channel.id
    time =  parseFloat(args) * 60 * 1000
    if (isNaN(time)) {
        msg.channel.send(`What is "uwu sprint ${args}"? Please state the time. [Eg. "5" = 5 minutes]`)
    }
    else {
        msg.channel.send(`Writing sprint for ${args} minutes starts now, <@${sprinter}>!`)
        sprint = sprintModel.create({
            userID: sprinter,
            serverID: msg.guild.id,
            channelID: msg.channel.id,
            sprint: Date.now() + time,
        }).catch((e) => { console.log(e); })
    }
}