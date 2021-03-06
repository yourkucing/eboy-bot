const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var answers = [
		'As I see it, yes.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don’t count on it.',
        'It is certain.',
        'It is decidedly so.',
        'Most likely.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Outlook good.',
        'Reply hazy, try again.',
        'Signs point to yes.',
        'Very doubtful.',
        'Without a doubt.',
        'Yes.',
        'Yes – definitely.',
        'You may rely on it.'
		]
    msg.channel.send(`*shakes 8ball slowly*`).then((sentMessage) => 
        setTimeout(function(){
            sentMessage.edit(answers[Math.floor(Math.random()*answers.length)]);
        }, 4000)
    )
}