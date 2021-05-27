const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    msg.channel.awaitMessages(m => m.author.id == "279101053750870017" && m.content == "CODE", {max: 10}).then(collected => {
        msg.channel.send(`\`Liam keyed in the code and successfully unlocked the door. But... it was empty? Where did the meowing come from then? He saw another piece of paper. This time, all it said was:\``)
        msg.channel.send(`*You have come to the end of the adventure! But wait, where's Amy? If you want to know, just type* \`uwu amy\``)
        return
    }).catch(collected => {
        msg.channel.send(`You did not get it! That's 10 tries. Unfortunately, you have to restart: \`uwu adventure\``)
        return
    });
}