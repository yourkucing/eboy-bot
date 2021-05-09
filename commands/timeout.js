const Discord = require('discord.js');
const timeoutModel = require('../models/timeoutSchema');
const ms = require('ms');

module.exports.run = async(client, msg, args) => {
    hooman = msg.author
    guild = msg.guild.id
    channel = msg.channel.id

    if (!msg.mentions.users.size) {
        msg.channel.send(`I'm not sure... who you wanted me to time out?`)
    }
    else {
        if (!msg.guild.me.hasPermission("ADMINISTRATOR")) {
            msg.channel.send(`I don't have an admininstrator permission to do this uwu! So sorry. >.<`)
        }
        else {
            taggedUser = msg.mentions.members.first()

            if (!msg.guild.roles.cache.find(x => x.name == "Time Out Corner")){

                highest = msg.guild.roles.highest.position
                bothighest = msg.guild.me.roles.highest.position
                console.log(highest)
                console.log(bothighest)
/*                 msg.channel.send(`\`\`\`Since this is the first time you run this command, I would like to let you know what is expected uwu.
                
    Timeout Command:\ncommand syntax: uwu timeout <tagged user> time [time should be in this format: 1m (1 minute) or 5s (5 seconds) or 4h (4 hours)]
    A role will be created and given to the person being timed out. This will last for the specified time. However, if no time is stated, they will be timed out for a default of 5mins.
                
    What happens when being timed out:\nThis is where it differs depending on (a) if your bot has the highest role (or at least higher than most roles other than the admin) and (b) if they don't.
                
    On the other hand, if the bot's role is one of the highest, the user will be assigned the Timed Out Corner role and it will always be seen from the user list. If they don't have a higher role, the user will be assigned the Time Out Corner role and that's it, you might not be able to see any effects taking place in the user list, which frankly, defeats the purpose of a Time Out Corner.
                
    With that being said, would you like to change your bot's role position right now? (Just answer yes or no within the next 1 minute.)
                \`\`\``) */
                msg.channel.send(`If your bot has a lower role, the Time Out role might not be seen in the user role, and that's it!`)
                msg.guild.roles.create({
                    data: {
                        name: 'Time Out Corner',
                        color: 'BLACK',
                        hoist:  true,
                        position: bothighest
                    },
                    reason: 'to time people out',
                    }).then(result => {
                        console.log(result.id)
                        taggedUser.roles.add(result).then(
                            (result2) => {
                                if (!args[1]) {
                                    time = 900000
                                    try {
                                        usertimeout = timeoutModel.create({
                                            userID: hooman.id,
                                            serverID: guild,
                                            channelID: channel,
                                            timeout: time
                                        })
                                    } catch (err) {
                                        console.log(err)
                                    }

                                    msg.channel.send(`**${taggedUser.displayName}** has been timed out for ${time/60000} minutes (default time). Shame on you!`)
                                }
                                else {

                                }
                            }
                        ).catch((err) => console.error(err))
                        
                    })
                    
            }
            else {
                taggedUser.roles.add(msg.guild.roles.cache.find(x => x.name == "Time Out Corner"), "");
            }
        }
    }

    setInterval(() => {
        const date = Date.now(); // today
        const timeout = Date.now() + timeoutData.timeout
        if (date > timeout) {
            deletion = await timeoutModel.deleteOne({userID: hooman.id, serverID: guild})
            msg.guild.channels.get("ChannelID").send(`yeet`)
            .catch(e => console.log(e))
            clearInterval(interval)
        }
      }, 60000); // check every minute
}