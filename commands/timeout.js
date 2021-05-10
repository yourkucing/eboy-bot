const Discord = require('discord.js');
const timeoutModel = require('../models/timeoutSchema');
const ms = require('ms');

module.exports.run = async(client, msg, args) => {
    
    hooman = msg.author
    guild = msg.guild.id
    channel = msg.channel.id

    if (!msg.mentions.users.size) {
        msg.channel.send(`I'm not sure... who you wanted me to time out?`)
        return
    }
    else {
        if (!msg.guild.me.hasPermission("ADMINISTRATOR")) {
            msg.channel.send(`I don't have an admininstrator permission to do this uwu! So sorry. >.<`)
            return
        }
        else {
            taggedUser = msg.mentions.members.first()

            if (!msg.guild.roles.cache.find(x => x.name == "Time Out Corner")){

                highest = msg.guild.roles.highest.position
                bothighest = msg.guild.me.roles.highest.position

/*                 msg.channel.send(`\`\`\`Since this is the first time you run this command, I would like to let you know what is expected uwu.
                
    Timeout Command:\ncommand syntax: uwu timeout <tagged user> time [time should be in this format: 1m (1 minute) or 5s (5 seconds) or 4h (4 hours)]
    A role will be created and given to the person being timed out. This will last for the specified time. However, if no time is stated, they will be timed out for a default of 5mins.
                
    What happens when being timed out:\nThis is where it differs depending on (a) if your bot has the highest role (or at least higher than most roles other than the admin) and (b) if they don't.
                
    On the other hand, if the bot's role is one of the highest, the user will be assigned the Timed Out Corner role and it will always be seen from the user list. If they don't have a higher role, the user will be assigned the Time Out Corner role and that's it, you might not be able to see any effects taking place in the user list, which frankly, defeats the purpose of a Time Out Corner.
                
    With that being said, would you like to change your bot's role position right now? (Just answer yes or no within the next 1 minute.)
                \`\`\``) */
                msg.channel.send(`Please do not change the name of the role (Time Out Corner) as it may affect the functionality of this command.\nIf your bot has a lower role, the Time Out role might not be seen in the user role, and that's it!`)
                msg.guild.roles.create({
                    data: {
                        name: 'Time Out Corner',
                        color: 'BLACK',
                        hoist:  true,
                        position: bothighest
                    },
                    reason: 'to time people out',
                    }).then(result => {

                        if (!args[1]) {
                            time = 900000
                            usertimeout = timeoutModel.create({
                                userID: taggedUser.id,
                                serverID: guild,
                                channelID: channel,
                                timeout: Date.now() + time
                            }).catch((e) => { console.log(e); })

                            msg.channel.send(`**${taggedUser.displayName}** has been timed out for ${time/60000} minutes (default time). Shame on you!`)
                        }
                        else {
                            time = args[1]
                            units = args[1].slice(-1)
                            if (units == "s") {
                                time1 = ms(time)
                            }
                            else if (units == "m") {
                                time1 = ms(time)
                            }
                            else if (units == "h") {
                                time1 = ms(time)
                            }
                            else {
                                msg.channel.send(`Are you sure you inputted the right format? It should be like this: 12m for 12 minutes. 12s for 12 seconds. 12h for 12 hours.`)
                                return
                            }
                            try {
                                usertimeout = timeoutModel.create({
                                    userID: taggedUser.id,
                                    serverID: guild,
                                    channelID: channel,
                                    timeout: Date.now() + time1
                                }).then(gettimeout => {
                                    timeoutData = timeoutModel.findOne({userID: taggedUser.id, serverID: guild}).then(answers => {
                                        if(answers) {
                                            msg.channel.send(`**${taggedUser.displayName}** has been timed out for ${time}. Shame on you!`)
                                            console.log(answers)
                                        }
                                    }
                                    )
                                })
                            } catch (err) {
                                console.log(err)
                            }
                        }

                        taggedUser.roles.add(result).catch((err) => console.error(err))
                        
                    })
                    
            }
            else {
                const user = msg.guild.members.cache.get(taggedUser.id)
                timeoutrole = msg.guild.roles.cache.find(x => x.name == "Time Out Corner")
                if (user.roles.cache.some((role) => role.id === timeoutrole.id)) {
                    msg.channel.send(`**${taggedUser.displayName}** is already in the time out corner!`)
                }
                else {
                    
                    if (!args[1]) {
                        taggedUser.roles.add(msg.guild.roles.cache.find(x => x.name == "Time Out Corner"), "");
                        time = 900000
                        usertimeout = timeoutModel.create({
                            userID: taggedUser.id,
                            serverID: guild,
                            channelID: channel,
                            timeout: Date.now() + time
                        }).catch((e) => { console.log(e); })

                        msg.channel.send(`**${taggedUser.displayName}** has been timed out for 15 minutes (default time). Shame on you!`)
                    }
                    else {
                        time = args[1]
                        units = args[1].slice(-1)
                        if (units == "s") {
                            time1 = ms(time)
                        }
                        else if (units == "m") {
                            time1 = ms(time)
                        }
                        else if (units == "h") {
                            time1 = ms(time)
                        }
                        else {
                            msg.channel.send(`Are you sure you inputted the right format? It should be like this: 12m for 12 minutes. 12s for 12 seconds. 12h for 12 hours.`)
                            return
                        }
                        taggedUser.roles.add(msg.guild.roles.cache.find(x => x.name == "Time Out Corner"), "");
                        try {
                            usertimeout = timeoutModel.create({
                                userID: taggedUser.id,
                                serverID: guild,
                                channelID: channel,
                                timeout: Date.now() + time1
                            }).then(gettimeout => {
                                timeoutData = timeoutModel.findOne({userID: taggedUser.id, serverID: guild}).then(answers => {
                                    if(answers) {
                                        msg.channel.send(`**${taggedUser.displayName}** has been timed out for ${time}. Shame on you!`)
                                        console.log(answers)
                                    }
                                }
                                )
                            })
                        } catch (err) {
                            console.log(err)
                        }
                    }
                }

            }
        }
    }

}