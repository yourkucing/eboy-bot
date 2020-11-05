const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    time =  float(args) * 60 * 1000 
    setTimeout(() => {
      console.log('Testing with this');
    }, time);
}