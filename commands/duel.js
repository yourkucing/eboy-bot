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
            msg.channel.send(`${taggedUser}, ${msg.guild.members.cache.get(msg.author.id).displayName} wants to duel you. Do you accept? (Reply yes or no.)`).then(() => {
                msg.channel.awaitMessages(m => m.author.id == taggedUser.id, {max: 1, time: 30000})
                    .then(collected => {
                        if (collected.first().content.toLowerCase() == 'yes') {
                        msg.channel.send("Let the battle begin!");
                        p1points = 100;
                        p2points = 100;
                        while (p1points > 0 && p2points > 0) {
                            const randomOption = results[Math.floor(Math.random() * results.length)];
                            msg.channel.send(`**${player1}** casted ${randomOption.message} (∩•̀ω•́)⊃-⋆`);
                            p2points = p2points + randomOption.xp;
                            msg.channel.send(`**${player1}**: ${p1points}, **${player2}**: ${p2points}`);
                            const randomOption2 = results[Math.floor(Math.random() * results.length)];
                            msg.channel.send(`**${player2}** casted ${randomOption2.message} ⋆-⊂(•̀ω•́∩)`);
                            p1points = p1points + randomOption2.xp;
                            msg.channel.send(`**${player1}**: ${p1points}, **${player2}**: ${p2points}`);
                        }
                        if (p1points === 0) {
                            msg.channel.send(`**${player1}** is DEFEATED. AAAAAAh! (ノﾟДﾟ)八(ﾟДﾟ)八(ﾟДﾟ)ﾉｨｪｰｨ！`);
                            msg.channel.send(`CONGRATULATIONS, ${player2}! (っ◕‿◕)っ :heart:`);
                        }
                        if (p2points === 0) {
                            msg.channel.send(`**${player2}** is DEFEATED. AAAAAAh! (ノﾟДﾟ)八(ﾟДﾟ)八(ﾟДﾟ)ﾉｨｪｰｨ！`);
                            msg.channel.send(`CONGRATULATIONS, ${player1}! (っ◕‿◕)っ :heart:`);
                        }
                    }

                    else if (collected.first().content.toLowerCase() == 'no') {
                        msg.channel.send("Yikes, are you scared? Maybe next time then!"); 
                    }                                   
            }).catch(collected => {
                msg.channel.send('No reply after 10 seconds, duel is cancelled!');
                });
            });

		}

	}
}