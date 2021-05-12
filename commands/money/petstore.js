const moneyModel = require('../../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (!args[0]) {
        url = `https://i.ibb.co/r2YqDBg/Screenshot-2021-05-12-at-3-07-17-PM.png`
        const embed = new Discord.MessageEmbed()
        .setColor('#FF69B4')
        .setTitle(`Welcome to the pet store!`)
        .setDescription(`You can purchase items here.\n\`uwu petstore <pet> to buy any pet you would like.\``)
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
        { name: `:dragon: Dragon`, value: `\`200 000 gp\``, inline: true}
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
                    msg.channel.send(`You have bought ${args[0]}! Aw, it looks so happy to see you. You can see its details through uwu pets.`)
                }
                else {
                    msg.channel.send(`Uh, right okay? Goodbye then!`)
                }
            })
        }
    }


}