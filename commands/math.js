const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    operation = args[0]
    if (operation == "add" || operation == "addition") {
        numbers = args.slice(1).join("")
        num = numbers.substring(
            numbers.lastIndexOf("[") + 1, 
            numbers.lastIndexOf("]")
        )
        msg.channel.send(num)
        numbers = num.split(",")
        var newnum = numbers.map(function (x) {
            return parseInt(x.trim()); 
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
            return parseInt(x.trim()); 
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
            return parseInt(x.trim()); 
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
            return parseInt(x.trim()); 
          });
          result = newnum.reduce((a, b) => a / b)
        msg.channel.send(`\`Result: ${result}\``)
    }
    else {
        msg.channel.send(`\`Sorry, as of now, eboy can only do addition, subtraction, multiplication and division.\``)
        return
    }
}