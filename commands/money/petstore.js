const moneyModel = require('../../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    hooman = msg.author.id
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
}