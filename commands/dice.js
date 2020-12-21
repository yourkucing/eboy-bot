const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    dice = args[0].split("d")
    result = Math.floor(Math.random() * dice[1]) + 1
    msg.channel.send("```\nResult: " + result + "\nDetails: " + args[0] + " (" + result + ")\n```");
}