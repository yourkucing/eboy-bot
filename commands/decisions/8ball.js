const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **8ball** command in **${guild}** [${msg.guild.id}].`)

	var answers = [
		'As I see it, yes uwu. Lesgo!',
        'Hmmm, ask again later. The stars say to shhhh for now.',
        'Better not tell you now. What if it breaks the universe?!',
        'The crystal ball is sleeping, so I can\'t predict now!',
        'Concentrate REAAAAL HARD and ask again uwu.',
        'Don\'t count on it. Like, really. Don\'t.',
        'It is certain. HUNDRED PERCENT. YES.',
        'It is decidedly so. Wow, I sound like a shifu.',
        'MMmMMMMm. Most likely.',
        'My reply is no. Why? You don\'t like it? Fight me 1v1 in the garden then!',
        'My sources say no. I don\'t know why. They\'re always grumpy.',
        'Outlook not so good. Maybe try inlook?',
        'Outlook good. Everything is good.',
        'R-r-r-rep-p-p-p-ly haz-z-z-z-y, try aga-a-a-a-ain.',
        'Signs point to yes. Like, ALL signs. Even the STOP sign.',
        'Very doubtful. Truly doubtful.',
        'Without a doubt. I cannot find the doubt. Error 404.',
        'Yes.',
        'Yes – definitely.',
        'You may rely on it. But not on me. I might not be reliable.'
		]
    msg.channel.send(`*shakes 8ball slowly*`).then((sentMessage) => 
        setTimeout(function(){
            sentMessage.edit(answers[Math.floor(Math.random()*answers.length)]);
        }, 4000)
    )
}