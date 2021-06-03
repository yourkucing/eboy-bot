const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const words = args.join(' ')
    choice = words.substring(
                words.lastIndexOf("[") + 1, 
                words.lastIndexOf("]")
            )
    choice = choice.split(",")
    shuffle(choice)
    result = ""
    for (x in choice) {
        result += choice[x] + " | "
    }
    msg.channel.send("`Result: " + result.slice(0, -3) + "`");
    
}