const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var results = [
        'Herbifors', 
        'Incendio', 
        'Locomotor Mortis',
        'Scourgify',
        'Tarantallegra',
        'Verdimillious',
        'Waddiwasi',
        'Engorgio Skullus',
        'Everte Statum',
        'Expelliarmus',
        'Mimble Wimble',
        'Immobulus',
        'Rictusempra',
        'Slugulus Eructo',
        'Christmas Decorations Spell',
        'Ectomatic',
        'Sardine Hex',
        'Webbed Spell',
        'Twitchy-Ears Hex',
        'Stretching Jinx',
        'Cheering Charm',
        'Cracker Jinx',
        'Ducklifors',
        'Glacius',
        'Glacius Tria',
        'Orbis',
        'Petrificus Totalus',
        'Vomitare Virids',
        'Aqua Eructo',
        'Ebublio',
        'Furnunculus',
        'Bombarda',
        'Stupefy'
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
            player2id = taggedUser.id;
            player1id = msg.author.id;
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
                        msg.channel.send(`**${player1}** casted ${randomOption} (∩•̀ω•́)⊃-⋆`);

                        dice = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
                        if (dice >= 10) {
                            hp = 50;
                            msg.channel.send(`**${player1}**'s spell hit **${player2}**! BAM :boom: **(-${hp} HP)** `);
                        }
                        else if (dice > 6 && dice < 10) {
                            hp = 20;
                            msg.channel.send(`**${player1}**'s spell hit **${player2}**! BAM :boom: **(-${hp} HP)** `);
                        }
                        else if (dice <= 6) {
                            hp = 0;
                            msg.channel.send(`**${player1}**'s spell was blocked by **${player2}**! :shield: **(-${hp} HP)** `);
                        }
                        p2points = p2points - hp; 
                        
                        if (p1points < 0) {
                            p1points = 0
                        }
                        
                        if (p2points < 0) {
                            p2points = 0
                        }
                        msg.channel.send("`" + player1 + ": " + p1points + ", " + player2 + ": " + p2points + "`");
                        
                        if (p1points <= 0 || p2points <= 0) {
                            continue;
                        }
                        
                        const randomOption2 = results[Math.floor(Math.random() * results.length)];
                        msg.channel.send(`**${player2}** casted ${randomOption2} ⋆-⊂(•̀ω•́∩)`);

                        dice2 = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
                        if (dice2 >= 10) {
                            hp = 50;
                            msg.channel.send(`**${player2}**'s spell hit **${player1}**! BAM :boom: **(-${hp} HP)** `);
                        }
                        else if (dice2 > 6 && dice2 < 10) {
                            hp = 20;
                            msg.channel.send(`**${player2}**'s spell hit **${player1}**! BAM :boom: **(-${hp} HP)** `);
                        }
                        else if (dice2 <= 6) {
                            hp = 0;
                            msg.channel.send(`**${player2}**'s spell was blocked by **${player1}**! :shield: **(-${hp} HP)** `);
                        }
                        p1points = p1points - hp; 
                        
                        if (p1points < 0) {
                            p1points = 0
                        }
                        
                        if (p2points < 0) {
                            p2points = 0
                        }
                        
                        msg.channel.send("`" + player1 + ": " + p1points + ", " + player2 + ": " + p2points + "`");
                    }
                    
                    if (p1points <= 0 && p2points > 0) {
                        msg.channel.send(`**${player1}** is DEFEATED. AAAAAAh! (ノﾟДﾟ)八(ﾟДﾟ)八(ﾟДﾟ)ﾉｨｪｰｨ！\r\nCONGRATULATIONS, **${player2}**! (っ◕‿◕)っ :heart:`);
                        const embed = new Discord.MessageEmbed()
                        .setColor('#FF69B4')
                        .setTitle(`${player2} won the duel!`)
                        .setImage('https://i.gifer.com/WKta.gif');
                        msg.channel.send(embed);
                    }
                    else if (p2points <= 0 && p1points > 0) {
                        msg.channel.send(`**${player2}** is DEFEATED. AAAAAAh! (ノﾟДﾟ)八(ﾟДﾟ)八(ﾟДﾟ)ﾉｨｪｰｨ！\r\nCONGRATULATIONS, **${player1}**! (っ◕‿◕)っ :heart:`);
                        const embed = new Discord.MessageEmbed()
                        .setColor('#FF69B4')
                        .setTitle(`${player1} won the duel!`)
                        .setImage('https://i.gifer.com/WKta.gif');
                        msg.channel.send(embed);
                    }
                }

                else if (collected.first().content.toLowerCase() == 'no') {
                    msg.channel.send("Yikes, are you scared? Maybe next time then!"); 
                }
                else {
                    msg.channel.send("Bruh, can you just reply **yes** or **no**? Oh my God, you had ONE job, dumdum. TSK. Please resend the duel invitation if you wanna duel T^T");
                }
            }).catch(collected => {
                msg.channel.send('No reply after 30 seconds, duel is cancelled!');
                });

		}

	}
}