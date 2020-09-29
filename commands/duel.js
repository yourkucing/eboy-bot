const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var results = [
			{
				message: 'Diffindo',
				xp: 20
			},
            {
				message: 'Ducklifors',
				xp: 20
			},
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
            //later
		}
		else {	
            msg.channel.send(`${taggedUser}, ${msg.guild.members.cache.get(msg.author.id).displayName} wants to duel you. Do you accept? (Reply yes or no.)`);
            msg.channel.awaitMessages(m => m.author.id == taggedUser.id, {max: 1, time: 30000}).then(collected => {
                if (collected.first().content.toLowerCase() == 'yes') {
                    msg.channel.send("Let the battle begin!");
                    p1points = 100;
                    p2points = 100;
                    if (p1points > 0 && p2points >0)
                        {
                            msg.channel.send("yes.");
                        }
                }

                else if (collected.first().content.toLowerCase() == 'no') {
                    msg.channel.send("Yikes, are you scared? Maybe next time then!"); 
                }                                   
            }).catch(collected => {
                msg.channel.send('No reply after 30 seconds, duel is cancelled!');
                });

		}

	}
}