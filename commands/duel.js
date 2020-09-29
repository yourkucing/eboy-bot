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
    var blockorhit = [
        'block',
        'hit'
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
                    player1 = msg.guild.members.cache.get(msg.author.id).displayName;
                    player2 = taggedUser.displayName;
                    msg.channel.send(`**${player1}**: ${p1points}, **${player2}**: ${p2points}`);
                    while (p1points > 0 && p2points > 0) {
                        const randomOption = results[Math.floor(Math.random() * results.length)];
                        msg.channel.send(`**${player1}** casted ${randomOption.message} (∩•̀ω•́)⊃-⋆`);
                        const randomOption3 = blockorhit[Math.floor(Math.random()*blockorhit.length)];
                        if (randomOption3 === "block")
                            {
                                msg.channel.send(`**${player1}**'s spell was blocked by **${player2}**! :shield:`);
                            }
                        else if (randomOption3 === "hit")
                            {
                                msg.channel.send(`**${player1}**'s spell hit **${player2}**! BAM :boom:`);
                                p2points = p2points - Number(randomOption.xp); 
                            }
                        msg.channel.send(`**${player1}**: ${p1points}, **${player2}**: ${p2points}`);
                        const randomOption2 = results[Math.floor(Math.random() * results.length)];
                        msg.channel.send(`**${player2}** casted ${randomOption2.message} ⋆-⊂(•̀ω•́∩)`);
                        const randomOption3 = blockorhit[Math.floor(Math.random()*blockorhit.length)];
                        if (randomOption3 === "block")
                            {
                                msg.channel.send(`**${player2}**'s spell was blocked by **${player1}**! :shield:`);
                            }
                        else if (randomOption3 === "hit")
                            {
                                msg.channel.send(`**${player2}**'s spell hit **${player1}**! BAM :boom:`);
                               p1points = p1points - Number(randomOption2.xp);
                            }
                        msg.channel.send(`**${player1}**: ${p1points}, **${player2}**: ${p2points}`);
                    }
                    if (p1points <= 0 && p2points > 0) {
                        msg.channel.send(`**${player1}** is DEFEATED. AAAAAAh! (ノﾟДﾟ)八(ﾟДﾟ)八(ﾟДﾟ)ﾉｨｪｰｨ！`);
                        msg.channel.send(`CONGRATULATIONS, ${player2}! (っ◕‿◕)っ :heart:`);
                    }
                    else if (p2points <= 0 && p1points > 0) {
                        msg.channel.send(`**${player2}** is DEFEATED. AAAAAAh! (ノﾟДﾟ)八(ﾟДﾟ)八(ﾟДﾟ)ﾉｨｪｰｨ！`);
                        msg.channel.send(`CONGRATULATIONS, ${player1}! (っ◕‿◕)っ :heart:`);
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