const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (msg.channel.id == "719493404190572604" && msg.author.id == "279101053750870017") {
        msg.channel.send(`\`Ah yes, Liam's very first adventure. And on his birthday, how... amazing. I do hope he survives. It would be a waste for him not to.\`
        \n\`Let's fast forward, shall we? After all, we're running out of time if Liam was going to save his kitty, Amy.\``)
        msg.channel.send(`https://media.discordapp.net/attachments/835701543009124362/838257570476064778/IMG_20210501_233120_954.jpg`)
        msg.channel.send(`\`Liam stared up at the House of Doom, gulping as he noticed the mist and darkness surrounding it. But he had no choice, did he? After all, the kitten of his life was inside. His poor Amy. With a heft of his backpack, Liam strode into the house with a sense of purpose. Find Amy and get out.\`
\`The moment he stepped into the house, his eyes widened at his surroundings. The width of the house is covered by a wide hall, a black marble fireplace at one end and a huge, red marble staircase at the other. Next to the fire place, there is a door. He can see serpents and skulls inconspicuously woven into the door design. With a shudder, he contemplated his next movement:\`
\n\n:arrow_right: \`Go into the room beside the fireplace.\`
:arrow_up: \`Go up the marble staircase\`
        
\`Make your choice, Liam. Choose fast, you only have 10 mins!\``).then(msg => {
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
                    msg.channel.send(`\`Liam walked towards the door, trying to turn its knob. Surprisingly, it's unlocked! With quiet footsteps, he wandered into the room— and stopped cold in his tracks. What's this? A letter addressed to him? He picked it up and read its contents.\``)
                    msg.channel.send(`*Hi Liam,\nAre you looking for Amy? Don't worry, she's fine actually. I mean, other than the fact that she keeps meowing for you. You must be an amazing pet owner, I don't doubt that. But anyway, I just wanted to take this time to tell you that you are:\n\nClever: you are. i mean, the way your mind works, i'm always impressed.\nOrganised: have you seen yourself when taking charge of the limes? You're one of my role models.\nDorky: the way you spazz about your own artwork is adorable as hell.\nEasy-going: i love being able to talk to you sometimes, it makes me feel comfortable and you're always fun to talk to.
                    
Anyway, that's pretty much it. I should be nicer, I guess. Since it's your birthday and all. There is a small room behind the mirror, but there's a code. You gotta put on your thinking CAPS. But I have faith in you.*`)
                    msg.channel.send(`\`Liam frowned and walked towards the mirror. He swore he could hear a short meow from behind the mirror. Pushing it aside, sure enough, there was a door. But there's a code too. Now what could it be?\`
                    
\`You have 10 tries to figure out the code. Hint: put them in capital letters, and you already know the code the moment you stepped into this room. Good luck! (Just reply with the code, 10 tries!)\``)

                    const collector = msg.channel.createMessageCollector(
                        m => m.author.id == "279101053750870017", {max: 10}
                    );
                    collector.on('collect', m => {
                        if (m.content == "CODE") {
                            msg.channel.send(`\`Liam keyed in the code and successfully unlocked the door. But... it was empty? Where did the meowing come from then? He saw another piece of paper. This time, all it said was:\``)
                            msg.channel.send(`*You have come to the end of the adventure! But wait, where's Amy? If you want to know, just type* \`uwu amy\``)
                            collector.stop("CODE")
                        }
                    });
                    collector.on('end', collected => {
                        if (collected.size == 10) {
                            msg.channel.send(`You did not get it! That's 10 tries. Unfortunately, you have to restart: \`uwu adventure\``)
                            return
                        }
                    });

                    right.stop()
                    up.stop()
                    msg.reactions.removeAll()
                })

                up.on('collect', (reaction, user) => {
                    msg.channel.send(`\`Liam decided to walk up the stairs. After all, Amy might be upstairs. Straight up was a huge foyer and of course, in the middle of that foyer was a note. He picked it up, curious. The note said:\``)
                    msg.channel.send(`*Liam, hihihi!\nMan, I'm really sorry I took your cat. It was a mistake though, I just wanted to play catch with her but she ended up lost. I tracked her here. She's probably somewhere but I'll tell you later. First things first though, I just wanted to tell you that you're a pretty amazing human being. I mean, if I'm being honest, every time you come into the server being your cool self, the happiness _doubled_ and it's true! I hope you realise how important you are to us, especially most of the EC gang. So please, never forget that okay?\n\nAnyway, just walk straight ahead and you'll see another door. But it has a lock! Good luck!*`)
                    msg.channel.send(`\`Liam frowned and walked towards the door at the end of the hall. Sure enough, he heard some sort of meowing. That must be Amy! But... the door is locked and there's a padlock with 4 digits. The first digit is already shown. It's 2. All he needed are three more digits.\`\n\n\`Key in the answer in this format: digit2,digit3,digit4 (eg. 2,3,4). Take note that there are no spaces in between or at the sides. Hint: You already know the answer from this hall. You have ten tries. Good luck!\``)

                    const collector = msg.channel.createMessageCollector(
                        m => m.author.id == "279101053750870017", {max: 10}
                    );
                    collector.on('collect', m => {
                        if (m.content == "4,6,8") {
                            msg.channel.send(`\`Liam keyed in the code and successfully unlocked the door. But... it was empty? Where did the meowing come from then? He saw another piece of paper. This time, all it said was:\``)
                            msg.channel.send(`*You have come to the end of the adventure! But wait, where's Amy? If you want to know, just type* \`uwu amy\``)
                            collector.stop("4,6,8")
                        }
                    });
                    collector.on('end', collected => {
                        if (collected.size == 10) {
                            msg.channel.send(`You did not get it! That's 10 tries. Unfortunately, you have to restart: \`uwu adventure\``)
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
}