const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (!msg.mentions.users.size) {
        msg.channel.send(`I'm not sure... who you wanted me to time out?`)
    }
    else {
        taggedUser = msg.mentions.members.first()
        time = 15000
        if (!msg.guild.roles.cache.find(x => x.name == "Time Out Corner")){

            highest = msg.guild.roles.highest.position
            bothighest = msg.guild.me.roles.highest.position
            console.log(highest)
            console.log(bothighest)
            msg.channel.send(`\`\`\`Since this is the first time you run this command, I would like to let you know what is expected uwu.
            
            Timeout Command:\ncommand syntax: uwu timeout <tagged user> time [time should be in this format: 1m (1 minute) or 5s (5 seconds) or 4h (4 hours)]
            A role will be created and given to the person being timed out. This will last for the specified time. However, if no time is stated, they will be timed out for a default of 5mins.
            
            What happens when being timed out:\nThis is where it differs depending on (a) if your bot has the highest role (or at least higher than most roles other than the admin) and (b) if they don't.\nIf they don't have a higher role, the user will be assigned the Time Out Corner role and that's it.
            
            On the other hand, if the bot's role is one of the highest, the user will be assigned the Timed Out Corner role and they will be redirected to a Timeout Channel where they will only be able to chat in there for the designated timeout time.
            
            With that being said, would you like to change your bot's role position? (Just answer yes or no within the next 1 minute.)
            \`\`\``)
            msg.channel.awaitMessages(m => m.author.id == taggedUser.id, {max: 1, time: 60000}).then(collected => { 
                if (collected.first().content.toLowerCase() == 'yes') {
                    msg.channel.send(`Alright, come back later!`)
                } 
                else if (collected.first().content.toLowerCase() == 'no') {

                }
                else {
                    msg.channel.send(`Right... Okay, goodbye!`)
                }
            }).catch(collected => {
                msg.channel.send('No reply after 1 minute, command is cancelled!');
            });
        }
        else {
            taggedUser.roles.add(msg.guild.roles.cache.find(x => x.name == "Time Out Corner"), "");
        }
    }
}