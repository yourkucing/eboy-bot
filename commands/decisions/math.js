const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **math** command in **${guild}** [${msg.guild.id}].`)

    operation = args[0]
    if (operation == "add" || operation == "addition") {
        numbers = args.slice(1).join("")
        num = numbers.substring(
            numbers.lastIndexOf("[") + 1, 
            numbers.lastIndexOf("]")
        )
        numbers = num.split(",")
        var newnum = numbers.map(function (x) {
            return parseFloat(x.trim()); 
          });
          result = newnum.reduce((a, b) => a + b)
        msg.channel.send(`\`Result: ${result}\``)
    }
    else if (operation == "subtract" || operation == "subtraction") {
        numbers = args.slice(1).join("")
        num = numbers.substring(
            numbers.lastIndexOf("[") + 1, 
            numbers.lastIndexOf("]")
        )
        numbers = num.split(",")
        var newnum = numbers.map(function (x) {
            return parseFloat(x.trim()); 
          });
          result = newnum.reduce((a, b) => a - b)
        msg.channel.send(`\`Result: ${result}\``)
    }
    else if (operation == "multiply" || operation == "multiplication") {
        numbers = args.slice(1).join("")
        num = numbers.substring(
            numbers.lastIndexOf("[") + 1, 
            numbers.lastIndexOf("]")
        )
        numbers = num.split(",")
        var newnum = numbers.map(function (x) {
            return parseFloat(x.trim()); 
          });
          result = newnum.reduce((a, b) => a * b)
        msg.channel.send(`\`Result: ${result}\``)
    }
    else if (operation == "divide" || operation == "division") {
        numbers = args.slice(1).join("")
        num = numbers.substring(
            numbers.lastIndexOf("[") + 1, 
            numbers.lastIndexOf("]")
        )
        numbers = num.split(",")
        var newnum = numbers.map(function (x) {
            return parseFloat(x.trim()); 
          });
          result = newnum.reduce((a, b) => a / b)
        msg.channel.send(`\`Result: ${result}\``)
    }
    else {
        msg.channel.send(`\`Sorry, as of now, eboy can only do addition, subtraction, multiplication and division.\``)
        return
    }
}