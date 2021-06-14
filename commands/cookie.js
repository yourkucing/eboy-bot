const Discord = require('discord.js');
const cookieModel = require('../models/cookieSchema');

module.exports.run = async(client, msg, args) => {
    if (!msg.mentions.users.size) {
        msg.channel.send("Uh... Who did you want to give cookie to? The server ghost?")
        return
    }
    else {
        hooman = msg.author
        taggedUser = msg.mentions.members.first();

        cookieData = await cookieModel.findOne({userID: hooman.id})
		taggedData = await cookieModel.findOne({userID: taggedUser.id})

        if (cookieData && taggedData) {
            await cookieModel.findOneAndUpdate({userID: hooman.id}, {
                $set: {
                    cookie: cookieData.cookie - 1
                }
            })

            await cookieModel.findOneAndUpdate({userID: taggedUser.id}, {
                $set: {
                    cookie: taggedData.cookie + 1
                }
            })
        }
        else if (!cookieData) {
            cookie = cookieModel.create({
                userID: hooman.id
            }).catch((e) => { console.log(e); }).then(r => {
                if (!r) {
                    msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                    console.log(r)
                    return
                }
                else {
                    if (!taggedData) {
                        cookie2 = cookieModel.create({
                            userID: taggedUser.id
                        }).catch((e) => { console.log(e); }).then(t => {
                            if (!t) {
                                msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                                console.log(r)
                                return
                            }
                            else {
                                cookieModel.findOneAndUpdate({userID: taggedUser.id}, {
                                    $set: {
                                        cookie: 1
                                    }
                                }).then(y => {
                                    console.log('Successful!')
                                })
                            }
                        })
                    }
                    else {
                        cookieModel.findOneAndUpdate({userID: taggedUser.id}, {
                            $set: {
                                cookie: taggedData.cookie + 1
                            }
                        }).then(z =>
                            {
                                console.log('Successful!')
                            })
                    }
                }
            })
        }
        else {
            if (!taggedData) {
                cookie2 = cookieModel.create({
                    userID: taggedUser.id
                }).catch((e) => { console.log(e); }).then(t => {
                    if (!t) {
                        msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                        console.log(r)
                        return
                    }
                    else {
                        cookieModel.findOneAndUpdate({userID: hooman.id}, {
                            $set: {
                                cookie: cookieData.cookie - 1
                            }
                        }).then(y => {
                            cookieModel.findOneAndUpdate({userID: taggedUser.id}, {
                                $set: {
                                    cookie: 1
                                }
                            }).then(z =>
                                {
                                    console.log('Successful!')
                                })
                        })
                    }
                })
            }
        }
    }
}