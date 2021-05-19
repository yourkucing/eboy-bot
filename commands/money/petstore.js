const moneyModel = require('../../models/moneySchema');
const petModel = require('../../models/petSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {

    cat = [ 'Abyssinian',
        'American Curl',
        'Birman',
        'Munchkin',
        'Norwegian Forest',
        'Ragdoll',
        'Scottish Fold',
        'Russian Blue'
    ]

    dog = [
        'German Shepherd',
        'Golden Retriever',
        'Siberian Husky',
        'Pomeranian',
        'Corgi',
        'Dalmatian',
        'Shiba Inu'
    ]

    owl = [
        'Snowy Owl',
        'Little Owl'
    ]

    snake = [
        'Viper',
        'King Snake',
        'Common Snake',
        'Milk Snake'
    ]

    penguin = [
        'Magellanic Penguin',
        'Little Penguin',
        'King Penguin'
    ]

    dragon = [
        'Oriental Dragon',
        'Standard Western Dragon',
        'Wyvern',
        'Hydra'
    ]

    personality = [
        'Busy, active, agenda-driven and affectionate',
        'Loving and intelligent',
        'Energetic and affectionate',
        'Even tempered and quiet',
        'Even temperament',
        'Vocal, affectionate, active',
        'Curious and athletic',
        'Sweet and affectionate',
        'Playful and affectionate',
        'Calm and quiet; enjoy people',
        'People oriented, affectionate',
        'Sociable, playful, and affectionate',
        'Quickly become attached to their owner',
        'Vocal, affectionate, active; can be insistent',
        'Active, racy, affectionate',
        'Pixie look and personality',
        'Athletic and active',
        'Highly intelligent, affectionate and extremely loyal',
        'Curious and Intelligent',
        'Large and powerful'
    ]

    names = ['Joy','Opal','Kelsey','Maria','Clement','Marsh','Hughie','Urban','Alban','Hazel','Theobold','Rebecca','Theo','Kingsley','Nina','Theodore','Shane','Craig',
            'Denton','Grant','Estelle','Les','Norman','Kelsey','Matilda','Davy','Damian','Willard','Madison','Violet','Truman','Maxwell','Abe','Grover','Abby']


    hooman = msg.author.id
    if (!args[0]) {
        url = `https://i.ibb.co/r2YqDBg/Screenshot-2021-05-12-at-3-07-17-PM.png`
        const embed = new Discord.MessageEmbed()
        .setColor('#FF69B4')
        .setTitle(`Welcome to the pet store!`)
        .setDescription(`You can purchase pets here.\n\`uwu petstore <pet> to buy any pet you would like.\``)
        .addFields(
        { name: `:spider: Spider`, value: `\`5 000 gp\``, inline: true},
        { name: `:crab: Crab`, value: `\`7 500 gp\``, inline: true},
        { name: `:dog: Dog`, value: `\`20 000 gp\``, inline: true},
        { name: `:cat: Cat`, value: `\`20 000 gp\``, inline: true},
        { name: `:owl: Owl`, value: `\`35 000 gp\``, inline: true},
        { name: `:snake: Snake`, value: `\`40 000 gp\``, inline: true},
        { name: `:penguin: Penguin`, value: `\`50 000 gp\``, inline: true},
        { name: `:tiger: Tiger`, value: `\`75 000 gp\``, inline: true},
        { name: `:unicorn: Unicorn`, value: `\`200 000 gp\``, inline: true},
        { name: `:dragon: Dragon`, value: `\`200 000 gp\``, inline: true},
        { name: `Universal Pet Food`, value: `\`50 gp\``}
        )
        .setThumbnail(`${url}`);
        msg.channel.send(embed)
    }
    else {
        if (args[0].toLowerCase() == "spider" || args[0].toLowerCase() == "crab" || args[0].toLowerCase() == "dog" || args[0].toLowerCase() == "cat" || args[0].toLowerCase() == "owl" || args[0].toLowerCase() == "snake" || args[0].toLowerCase() == "penguin" || args[0].toLowerCase() == "tiger" || args[0].toLowerCase() == "unicorn" || args[0].toLowerCase() == "dragon") {
            msg.channel.send(`\`Are you buying a ${args[0]}? (Answer only yes or no.)\``)
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'no') {
                    msg.channel.send(`Oh, good bye for now then!`)
                    return
                }
                else if (collected.first().content.toLowerCase() == 'yes') {
                    if (args[0].toLowerCase() == "spider") {
                        cost = 5000
                        petname = names[Math.floor(Math.random()*names.length)]
                        personality = personality[Math.floor(Math.random()*personality.length)]
                        type = "Spider"
                    }
                    else if (args[0].toLowerCase() == "crab") {
                        cost = 7500
                        petname = names[Math.floor(Math.random()*names.length)]
                        personality = personality[Math.floor(Math.random()*personality.length)]
                        type = "Crab"
                    }
                    else if (args[0].toLowerCase() == "dog" || args[0].toLowerCase() == "cat") {
                        cost = 0
                        petname = names[Math.floor(Math.random()*names.length)]
                        personality = personality[Math.floor(Math.random()*personality.length)]
                        if (args[0].toLowerCase() == "dog") {
                            type = dog[Math.floor(Math.random()*dog.length)]
                        }
                        else {
                            type = cat[Math.floor(Math.random()*cat.length)]
                        }
                    }
                    else if (args[0].toLowerCase() == "owl") {
                        cost = 35000
                        petname = names[Math.floor(Math.random()*names.length)]
                        personality = personality[Math.floor(Math.random()*personality.length)]
                        type = owl[Math.floor(Math.random()*owl.length)]
                    }
                    else if (args[0].toLowerCase() == "snake") {
                        cost = 40000
                        petname = names[Math.floor(Math.random()*names.length)]
                        personality = personality[Math.floor(Math.random()*personality.length)]
                        type = snake[Math.floor(Math.random()*snake.length)]
                    }
                    else if (args[0].toLowerCase() == "penguin") {
                        cost = 50000
                        petname = names[Math.floor(Math.random()*names.length)]
                        personality = personality[Math.floor(Math.random()*personality.length)]
                        type = penguin[Math.floor(Math.random()*penguin.length)]
                    }
                    else if (args[0].toLowerCase() == "tiger") {
                        cost = 75000
                        petname = names[Math.floor(Math.random()*names.length)]
                        personality = personality[Math.floor(Math.random()*personality.length)]
                        type = "Tiger"
                    }
                    else if (args[0].toLowerCase() == "unicorn" || args[0].toLowerCase() == "dragon") {
                        cost = 200000
                        petname = names[Math.floor(Math.random()*names.length)]
                        personality = personality[Math.floor(Math.random()*personality.length)]
                        if (args[0].toLowerCase() == "dragon"){
                            type = dragon[Math.floor(Math.random()*dragon.length)]
                        }
                        else {
                            type = "Unicorn"
                        }
                    }
                    moneyModel.findOne({userID: hooman}).then(customer => {
                        if (customer) {
                            if (customer.gold >= cost) {
                                moneyModel.findOneAndUpdate({userID: hooman}, {
                                    $inc: {
                                        gold: -cost
                                    }
                                }).then(updatemoney => {
                                    if (updatemoney) {
                                        msg.channel.send(`${args[0]}, ${petname}, ${type}, ${personality}`)
                                        pets = petModel.create({
                                            userID: hooman,
                                            health: 10,
                                            pet: args[0],
                                            petname: petname,
                                            type: type,
                                            personality: personality,
                                            updatedtime: Date.now()
                                        }).catch((e) => { console.log(e); }).then(pets => {
                                            msg.channel.send(`You have bought ${args[0]}! Aw, it looks so happy to see you. You can see its details through \`uwu pets.\``)
                                        })
                                    }
                                    else {
                                        msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                                        console.log(r)
                                        return
                                    }
                                })
                            }
                            else {
                                msg.channel.send(`You don't have enough money! You are short of ${cost - customer.gold} g.`)
                                return
                            }
                        }
                    })
                }
                else {
                    msg.channel.send(`Uh, right okay? Goodbye then!`)
                }
            })
        }
        else if (args[0].toLowerCase() == "pet food") {
            msg.channel.send(`\`How many pet food are you buying? (Type out the number)\``)
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (parseInt(collected.first().content).isNaN) {
                    msg.channel.send(`That's not a number.`)
                    return
                }
                else {
                    number = parseInt(collected.first().content)
                    petModel.findOneAndUpdate({userID: hooman, pet: "food"}, {
                        $inc: {
                            health: number
                        },
                        $set: {
                            updatedtime: Date.now()
                        }
                    }, {
                        new: true,
                        upsert: true
                    }).then(updatefood => {
                        if (updatefood) {
                            msg.channel.send(`You have bought ${number} pet food.`)
                        }
                        else {
                            msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                            console.log(updatefood)
                            return
                        }
                    })
                }
            })
        }
    }
}