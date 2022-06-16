const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const welcomeModel = require('../../models/welcomemsgSchema')

module.exports.run = async(client, msg, args) => {
    try {
        eboylog = client.channels.cache.get('867744429657292810')
        author = msg.author
        guild = client.guilds.cache.get(msg.guild.id)
        eboylog.send(`**${author.username}** [${author.id}] used the **welcomemsg** command in **${guild}** [${msg.guild.id}].`)
    
        if (!msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            msg.channel.send("You don't have Administrator permissions to use this.")
            return
        }
/*         else {
            author = msg.author.id
            serverID = msg.guild.id
            if (!args || args.length == 0) {
                msg.channel.send(`Please put in the channel in your command too like this: \`uwu welcome-msg #thechannelyouwant\``)
                return
            }
            else {
                chan = msg.mentions.channels.map(channel => {
                    return channel.id
                })
                chanID = chan[0]
                msg.channel.send("Please key in your welcome message.")
                const filter = m => m.author.id == msg.author.id;
                msg.channel.awaitMessages({filter, max: 1}).then(collected => {
                    message = collected.first().content
                    const embed = new MessageEmbed()
                        .setColor(`#FF69B4`)
                        .setDescription(`Please react on the emoji to confirm that this is your welcome message.`)
                        .addField(`Welcome Message:`, message);
                    msg.channel.send({embeds: [embed]}).then(r => {
                        r.react(`✅`)
                        //r.awaitReactions({})
                    })
                   
                })
            }
        } */

    } catch(e) {
        console.log(e)
    }
}