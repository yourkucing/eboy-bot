const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    hooman = msg.author.id
    msg.channel.send(`\`1\``).then(msg => {
        msg.react('➡️').then(message => {
            msg.react('⬆️')
            const rightFilter = (reaction, user) => {
                return reaction.emoji.name === '➡️' && !user.bot;
            };
            const upFilter = (reaction, user) => {
                return reaction.emoji.name === '⬆️' && !user.bot;
            };
            const right = msg.createReactionCollector(rightFilter, { time: 600000 });
            const up = msg.createReactionCollector(upFilter, { time: 600000 });

            right.on('collect', (reaction, user) => {
                msg.channel.send(`\`1a\``)

                const collector = msg.channel.createMessageCollector(
                    m => m.author.id == hooman, {max: 10}
                );
                collector.on('collect', m => {
                    if (m.content == "CODE") {
                        msg.channel.send(`\`1b\``).then(msg => {
                            msg.react('➡️').then(message => {
                                msg.react('⬆️')
                                const rightFilter2 = (reaction, user) => {
                                    return reaction.emoji.name === '➡️' && !user.bot;
                                };
                                const upFilter2 = (reaction, user) => {
                                    return reaction.emoji.name === '⬆️' && !user.bot;
                                };
                                const right2 = msg.createReactionCollector(rightFilter2, { time: 600000 });
                                const up2 = msg.createReactionCollector(upFilter2, { time: 600000 });

                                right2.on('collect', (reaction, user) => {
                                    msg.channel.send(`\`1c1\``)
                                    const collector2 = msg.channel.createMessageCollector(
                                        m => m.author.id == hooman, {max: 10}
                                    );
                                    collector2.on('collect', m => {
                                        if (m.content == "CODE2") {
                                            msg.channel.send(`\`1c2\``)
                                            collector2.stop("CODE2")
                                        }
                                    })
                                    collector2.on('end', collected => {
                                        if (collected.size == 10) {
                                            msg.channel.send('restart!')
                                            return
                                        }
                                    })
                                    right2.stop()
                                    up2.stop()
                                    msg.reactions.removeAll()
                                })
                                up2.on('collect', (reaction, user) => {
                                    msg.channel.send(`\`1cb\``)
                                    right2.stop()
                                    up2.stop()
                                    msg.reactions.removeAll()
                                })
                            })
                        })
                        collector.stop("CODE")
                    }
                });
                collector.on('end', collected => {
                    if (collected.size == 10) {
                        msg.channel.send(`You did not get it! That's 10 tries. Unfortunately, you have to restart: \`uwu campaign\``)
                        return
                    }
                });

                right.stop()
                up.stop()
                msg.reactions.removeAll()
            })

            up.on('collect', (reaction, user) => {
                msg.channel.send(`\`He decided to walk up the stairs. After all, Amy might be upstairs. Straight up was a huge foyer and of course, in the middle of that foyer was a note. He picked it up, curious. The note said:\``)
                msg.channel.send(`*Hihihi!\nMan, I'm really sorry I took your cat. It was a mistake though, I just wanted to play catch with her but she ended up lost. I tracked her here. She's probably somewhere but I'll tell you later. First things first though, I just wanted to tell you that you're a pretty amazing human being. I mean, if I'm being honest, every time you come into the server being your cool self, the happiness __doubled__, (sorta like in 2s, you know?) and it's true! I hope you realise how important you are to us, especially most of the gang. So please, never forget that okay?\n\nAnyway, just walk straight ahead and you'll see another door. But it has a lock! Good luck!*`)
                msg.channel.send(`\`He frowned and walked towards the door at the end of the hall. Sure enough, he heard some sort of meowing. That must be Amy! But... the door is locked and there's a padlock with four digits. The first digit is already shown. It's 2. All he needed are three more digits.\`\n\n\`Key in the answer in this format: digit2,digit3,digit4 (eg. 2,3,4). Take note that there are no spaces in between or at the sides. Hint: You already know the answer from this hall. You have ten tries. Good luck!\``)

                const collector = msg.channel.createMessageCollector(
                    m => m.author.id == hooman, {max: 10}
                );
                collector.on('collect', m => {
                    if (m.content == "4,6,8") {
                        msg.channel.send(`\`He keyed in the code and successfully unlocked the door. But... it was empty? Where did the meowing come from then? He saw another piece of paper. This time, all it said was:\``)
                        msg.channel.send(`*You have come to the end of the adventure! But wait, where's Amy? If you want to know, just type* \`uwu kitty\``)
                        collector.stop("4,6,8")
                    }
                });
                collector.on('end', collected => {
                    if (collected.size == 10) {
                        msg.channel.send(`You did not get it! That's 10 tries. Unfortunately, you have to restart: \`uwu campaign\``)
                        return
                    }
                });

                right.stop()
                up.stop()
                msg.reactions.removeAll()
            })

        })
    })

}