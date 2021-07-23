const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	eboylog.send(`**${author.username}** [${author.id}] used the **random** command.`)

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
        result += choice[x].trim() + " | "
    }
    msg.channel.send("`Result: " + result.slice(0, -3) + "`");
    
}