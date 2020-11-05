const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    time =  parseFloat(args) * 60 * 1000 
    setTimeout(() => {
      msg.channel.send('Testing with this');
    }, time);
}